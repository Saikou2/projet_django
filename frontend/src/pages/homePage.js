import React from 'react';
import { Link, Navigate} from 'react-router-dom';


const HomePage=()=>{

	
    
    return (
        <>
        <header id="mu-header" className="" role="banner">
		<div className="container">
			<nav className="navbar navbar-default mu-navbar">
			  	<div className="container-fluid">
				   
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>

				      
				      <a className="navbar-brand" href="index.html"><i className="fa fa-book" aria-hidden="true"></i> Kindle</a>

				    
				      <a className="navbar-brand" href="index.html"><img src="/assets/images/logo.png"/></a> 


				    </div>

				   
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      	<ul className="nav navbar-nav mu-menu navbar-right">
					        <li><a href="#">HomePage</a></li>
					        <li><a href="#mu-book-overview">VUE D'ENSEMBLE</a></li>
					        {/* <li><a href="#mu-author">AUTEUR</a></li>
				            <li><a href="#mu-pricing">PRIX</a></li>
				            <li><a href="#mu-testimonials">TEMOIGNAGE</a></li> */}
				            <li><a href="#mu-contact">CONTACT</a></li>
							<li><Link to="/Login">Login</Link></li>
							<li><Link to="Signup">Signup</Link></li>
							{/* <button onClick={logout}>Logout</button> */}
				      	</ul>
				    </div>
			  	</div>
			</nav>
		</div>

	</header>
    <section id="mu-hero">
		<div className="container">
			<div className="row">

				<div className="col-md-6 col-sm-6 col-sm-push-6">
					<div className="mu-hero-right">
						<img src="/assets/images/ebook.png" alt="Ebook img"/>
					</div>
				</div>

				<div className="col-md-6 col-sm-6 col-sm-pull-6">
					<div className="mu-hero-left">
						<h1>Perfect Landing Page Template to Present Your eBook</h1>
						<p>Bienvenue à notre bibliothèque en ligne, un espace où la connaissance est à portée de clic. Explorez une vaste collection de livres, articles et ressources numériques, soigneusement sélectionnés pour satisfaire votre soif d'apprendre et de découvrir. Que vous soyez à la recherche d'un classique littéraire, d'un guide pratique ou d'une étude académique, notre plateforme intuitive vous offre un accès instantané à des trésors de savoir. Plongez dans un monde de lecture sans frontières, accessible où que vous soyez, à tout moment..</p>
						<a href="#" className="mu-primary-btn">Download Now!</a>
						<span>*lire  PDF, ePUB, Mobi & Kindle.</span>
					</div>
				</div>	

			</div>
		</div>
	</section>
    <main role="main">

		
		<section id="mu-counter">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-counter-area">

							<div className="mu-counter-block">
								<div className="row">

									
									<div className="col-md-3 col-sm-6">
										<div className="mu-single-counter">
											<i className="fa fa-files-o" aria-hidden="true"></i>
											<div className="counter-value" data-count="650">0</div>
											<h5 className="mu-counter-name">Total Pages</h5>
										</div>
									</div>
									
									<div className="col-md-3 col-sm-6">
										<div className="mu-single-counter">
											<i className="fa fa-file-text-o" aria-hidden="true"></i>
											<div className="counter-value" data-count="422">0</div>
											<h5 className="mu-counter-name">Chapters</h5>
										</div>
									</div>
									
									<div className="col-md-3 col-sm-6">
										<div className="mu-single-counter">
											<i className="fa fa-users" aria-hidden="true"></i>
											<div className="counter-value" data-count="1055">0</div>
											<h5 className="mu-counter-name">Active Readers</h5>
										</div>
									</div>
									
									<div className="col-md-3 col-sm-6">
										<div className="mu-single-counter">
											<i className="fa fa-trophy" aria-hidden="true"></i>
											<div className="counter-value" data-count="03">0</div>
											<h5 className="mu-counter-name">Got Awards</h5>
										</div>
									</div>
									

								</div>
							</div>


						</div>
					</div>
				</div>
			</div>
		</section>
		

		
		
		
		<section id="mu-pricing">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-pricing-area">

							<div className="mu-heading-area">
								<h2 className="mu-heading-title">Our Pricing Plans</h2>
								<span className="mu-header-dot"></span>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
							</div>

							
							<div className="mu-pricing-content">
								<div className="row">

									
									<div className="col-sm-6 col-md-4">
										<div className="mu-pricing-single">

											<div className="mu-pricing-single-head">
												<h4>STANDARD PLAN</h4>
												<p className="mu-price-tag">
													<span>$</span> 15
												</p>
											</div>

											<ul className="mu-price-feature">
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
											</ul>

											<div className="mu-pricing-single-footer">
												<a href="#" className="mu-order-btn">Order Now!</a>
											</div>

										</div>
									</div>
									
									<div className="col-sm-6 col-md-4">
										<div className="mu-pricing-single mu-popular-price-tag">


											<div className="mu-pricing-single-head">
												<h4>PROFESSIONAL PLAN</h4>
												<p className="mu-price-tag">
													<span>$</span> 25
												</p>
											</div>

											<ul className="mu-price-feature">
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
											</ul>

											<div className="mu-pricing-single-footer">
												<a href="#" className="mu-order-btn">Order Now!</a>
											</div>
											

										</div>
									</div>
									
									<div className="col-sm-6 col-md-4">
										<div className="mu-pricing-single">


											<div className="mu-pricing-single-head">
												<h4>EXCLUSIVE PLAN</h4>
												<p className="mu-price-tag">
													<span>$</span> 45
												</p>
											</div>

											<ul className="mu-price-feature">
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
												<li> Lorem ipsum dolor sit amet. </li>
											</ul>

											<div className="mu-pricing-single-footer">
												<a href="#" className="mu-order-btn">Order Now!</a>
											</div>
											
											
										</div>
									</div>
									

								</div>
							</div>
							

						</div>
					</div>
				</div>
			</div>
		</section>
		
		

	
		
		<section id="mu-contact">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-contact-area">

							<div className="mu-heading-area">
								<h2 className="mu-heading-title">Drop Us A Message</h2>
								<span className="mu-header-dot"></span>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
							</div>

							
							<div className="mu-contact-content">

								<div id="form-messages"></div>
								<form id="ajax-contact" method="post" action="mailer.php" className="mu-contact-form">
									<div className="form-group">                
										<input type="text" className="form-control" placeholder="Name" id="name" name="name" required/>
									</div>
									<div className="form-group">                
										<input type="email" className="form-control" placeholder="Enter Email" id="email" name="email" required/>
									</div>              
									<div className="form-group">
										<textarea className="form-control" placeholder="Message" id="message" name="message" required></textarea>
									</div>
									<button type="submit" className="mu-send-msg-btn"><span>SUBMIT</span></button>
						        </form>

							</div>
							

						</div>
					</div>
				</div>
			</div>
		</section>
		

		
		<section id="mu-google-map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589888.4396405783!2d-82.41588603632052!3d32.866951223053896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9f727a4ed30eb%3A0xf2139b0c5c7ae1ec!2sDooley+Branch+Rd%2C+Millen%2C+GA+30442%2C+USA!5e0!3m2!1sen!2sbd!4v1497376364225" width="100%" height="500" frameborder="0"  allowfullscreen></iframe>
		</section>
		

	</main>
    <footer id="mu-footer" role="contentinfo">
		<div className="container">
			<div className="mu-footer-area">
				<div className="mu-social-media">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-google-plus"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
				</div>
				<p className="mu-copyright">&copy; Copyright <a rel="nofollow" href="http://markups.io">markups.io</a>. All right reserved.</p>
			</div>
		</div>

	</footer>
    </>
    )
};
export default HomePage;