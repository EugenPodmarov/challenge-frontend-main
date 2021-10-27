import * as axios from "axios"
import { useEffect, useState } from "react";
import { Card, Button, Table, ListGroup, ListGroupItem } from "react-bootstrap";
import style from "./styles/List.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
	cards:{
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	card: {
		background: '#fff',
		width: '22rem',
		borderRadius: '0.6em',
		margin: '1em',
		overflow: 'hidden',
		cursor: 'pointer',
		boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)',
		transition: 'all ease 200ms',
	},
	cardImg: {
		display: 'flex',
		objectFit: 'cover',
		
	  },
	cardTitle: {
		textAlign: 'center'
	},
	cardFooter: {
		background: '#0000',
		border: 'none',
		fontSize: '1.2em'
	},
	cardText:{
		display: 'grid'
	},
	btnInfo: {
		margin: '5px'
	},
	variants:{
		textAlign: "center"
	}
}

const createList = (list, sortList) => {
	const [isWish, setWish] = useState(false);

	const addWishList = ({ target: { checked, value} },) => {
		console.log(checked, value);
		setWish(checked);
		if (checked) {
			sortList.push(list[Number(value)])
		} else {
			let index = sortList.indexOf(list[Number(value)])
			sortList.splice(index, 1)
		}
	};

	return (list.map((item, key) => {

		return <Card className="text-center " style={styles.card}>
			<Card.Img variant="top" style={styles.cardImg} src={item.image} rounded></Card.Img>
			{sortList &&
			<input type="checkbox" id={item}
			onChange={ addWishList }
			value={list.indexOf(item)} label="Add to Wish"/>}

			<Card.Body className="flex-fill">
				<Card.Title className={styles.cardTitle} onClick={() => {console.log(item.variants)}}><strong>{item.name}</strong></Card.Title>
				<Table responsive>
					<tbody>
						<tr>
							<td>Preparation:</td>
							<td>{item.preparation}</td>
						</tr>
					</tbody>
				</Table>
				&nbsp;
				<Table >
					<tbody>
						<tr>
							<td colSpan="2">Grind:</td>
						</tr>
						<tr>
						{Array.from(item.variants.grind).map(index => (
							<td><Button style={styles.btnInfo} variant="warning">{index.label}</Button></td>
						))}
						</tr>
					</tbody>
				</Table>
				<Table >
					<tbody>
						<tr>
							<td colSpan="2">Size:</td>
						</tr>
						<tr>
						{Array.from(item.variants.size).map(index => (
							<td><Button style={styles.btnInfo} variant="warning">{index.label}</Button></td>
						))}
						</tr>
					</tbody>
				</Table>					
			</Card.Body>
			<Card.Footer style={styles.cardFooter}>
				<Card.Text className="price">from <strong>{item.price}</strong> €</Card.Text>
			</Card.Footer>
		</Card>
	}))
}

const List = () => {

	const [listArr, setListArr] = useState([])
	const [sortListArr, setSortListArr] = useState([])
	const [isShowSelectedList, setIsShowSelectedList] = useState(false)

	useEffect(() => {
		axios.get('https://api.npoint.io/1054e02d717408615e8c')
			.then(async function (response) {
				response = response.data
				setListArr(response);
			})
	}, [])

	let listCoffee = createList(listArr, sortListArr)

	let sortListCoffee = createList(sortListArr)

	return (
		<div>
			<Button variant="outline-success"
				onClick={!isShowSelectedList ?
					() => { setIsShowSelectedList(true) } :
					() => { setIsShowSelectedList(false) }}>Show selected</Button>
			<div className={!isShowSelectedList ? 'row' : style.hide}>
				{listCoffee}
			</div>
			<div className={isShowSelectedList ? 'row' : style.hide}>
				{sortListCoffee}
			</div>
		</div>
	)
}

export default List;
