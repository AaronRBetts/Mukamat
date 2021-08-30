
import React from 'react';
import {Popup} from '../../../index'
import './styles.css'
import Overlay from '../../../../images/binder.png'
import OverlayV from '../../../../images/binderV.png'

const Book = ({product}) => {
    return (
				<ul className="align">
					<li>
						<figure className={product.name === 'Matkaan' ? 'book vertical' : 'book'}>


							<ul className='hardcover_front'>
								<li style={{backgroundImage: `url(${product.media.source})`}}>
									{product.name === 'Lukukirja' ? '' : product.name === 'Play in English' ? '' : product.name === 'Kirjaintaulut' ? '' : product.name === 'Kirjaintaulut & kirjaintaulukirja' ? '' : <img className={ product.name === 'Matkaan' ? 'binderH' : 'binder'} src={ product.name === 'Matkaan' ? OverlayV : Overlay}/>}
								</li>
								<li></li>
							</ul>


							<ul className='page'>
								<li></li>
								<li>
									<Popup product={product}/>
								</li>
								<li></li>
								<li></li>
								<li></li>
							</ul>


							<ul className='hardcover_back'>
								<li></li>
								<li></li>
							</ul>
							<ul className='book_spine'>
								<li></li>
								<li></li>
							</ul>
						</figure>
					</li>
				</ul>
    )
}

export default Book
