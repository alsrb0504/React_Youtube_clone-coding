import React, { useState } from 'react';
import Listelement from './listelement';

const Playlist = (props) => { 

	const items = {...props.items};

	return (
		<>
			<ul className="playlist	">
				{
					items.map(item =>{
						<Listelement item={item} /> 
					})
				}
			</ul>
		</>
	)
};

export default Playlist;