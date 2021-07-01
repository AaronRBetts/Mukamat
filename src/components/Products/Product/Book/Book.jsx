
import React from 'react';
import {Popup} from '../../../index'
import './styles.css'

const Book = ({product}) => {

    return (
            <div className="component">
				<ul className="align">
					<li>
						<figure className='book'>


							<ul className='hardcover_front'>
								<li style={{backgroundImage: `url(${product.media.source})`}}>
									<div className="coverDesign">
										{/* <h1>CSS</h1>
										<p>BOOK</p> */}
									</div>
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
			</div>
    )
}

export default Book
