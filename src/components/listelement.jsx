const [items, setitems] = useState([]);

	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

  useEffect(()=>{
	fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCA21QAe0o4DFmzUgaPQF1mVJnyjK6oAwA", requestOptions)
		.then(response => response.text())
		.then(result => {
			const data = JSON.parse(result);
      const imsi_items = {...data.items};
      setitems(imsi_items);
			})
		.catch(error => console.log('error', error));
    }, []);



import React from 'react';

const Listelement = (props) => {
	
	console.log(props);

	return (
		<>
			<li className="listElement">
			
				<span className="video-text">{props.id}</span>
			</li>
		</>
	)
};

export default Listelement;