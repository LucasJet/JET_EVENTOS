import React from 'react';
import HomeNavbar from '../../components/HomeNavbar';

import {
  ContainerSections,
	Section,
	ContainerInfo,
	ContainerInfoContato,
} from "./styles";

const Homepage = () => {
	return (
		<>
			<HomeNavbar />
			<ContainerSections>

				<Section id="sobre-nos" style={ { background: 'rgba(60, 100, 177, 0.05)' } }>
					<iframe
						width="800"
						height="550"
						src="https://www.youtube.com/embed/UIaWJsrg3Y8?controls=0"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>

					<ContainerInfo style={ { width: '40%' } }>
						<h3>SOBRE NÓS</h3>

						<h1>Lorem ipsum dolor sit amet.</h1>

						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod turpis a cursus dignissim. Aenean eleifend magna quis porttitor placerat. Morbi at posuere lorem. Duis lobortis in dolor in tincidunt.
						</span>
					</ContainerInfo>
				</Section>

				<Section>
					<ContainerInfo style={ { width: '70%' } }>
						<h1>Lorem ipsum dolor sit amet.</h1>

						<div>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod turpis a cursus dignissim. Aenean eleifend magna quis porttitor placerat. Morbi at posuere lorem. Duis lobortis in dolor in tincidunt.
							</span>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod turpis a cursus dignissim. Aenean eleifend magna quis porttitor placerat. Morbi at posuere lorem. Duis lobortis in dolor in tincidunt.
							</span>
						</div>
					</ContainerInfo>

					<img src={ require('../../assets/foto-jet-sobre-nos.JPG') } alt="Imagem jet" />
				</Section>

				<Section id="contato" style={ { background: 'rgba(60, 100, 177, 0.05)', height: '40vh', padding: '5%' } }>
					<ContainerInfoContato>
						<h1>Contato</h1>

						<div>
							<div>
								<img src={ require('../../assets/icon-email.png') } alt="icon events" />
								<span>
									jovemetecnologia@jet.com
								</span>
							</div>

							<div>
								<img src={ require('../../assets/icon-whatsapp.png') } alt="icon events" />
								<span>
									(51) 99641-8280 
								</span>
							</div>

							<div>
								<img src={ require('../../assets/icon-facebook.png') } alt="icon events" />
								<span>
									https://www.facebook.com/jovemeti/
								</span>
							</div>
						</div>
					</ContainerInfoContato>
				</Section>

			</ContainerSections>
		</>
	);
}

export default Homepage;