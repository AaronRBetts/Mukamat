
import React from 'react';
import {Popup} from '../../../index'
import './styles.css'
import Overlay from '../../../../images/binder.png'

const Book = ({product}) => {

    return (
				<ul className="align">
					<li>
						<figure className='book'>


							<ul className='hardcover_front'>
								<li style={{backgroundImage: `url(${product.media.source})`}}>
									<img className='binder' src={Overlay}/>
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
