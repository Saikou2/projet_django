import React, { Component, useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './styles.css';
import axiosInstance from '../axiosConfig';


const Home=()=>{
	const navigate= useNavigate()
	const logout=()=>{
		localStorage.removeItem("access_token")
		localStorage.removeItem("refreshToken")
		localStorage.removeItem("token")
		localStorage.removeItem("superuser")
		navigate("/")
	}
	const [isSuperUser, setIsSuperUser] = useState(false);
  	const [loading, setLoading] = useState(true);
	const Navigate = useNavigate();
	const handleButtonClick = () => {
		// Naviguer vers la page UserList
		Navigate('/users')
	};
  	useEffect(() => {
    // Vérification si l'utilisateur est un super utilisateur
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('custom_auth/user/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        // Si l'utilisateur est un super utilisateur
        if (response.data.is_superuser) {
          setIsSuperUser(true);
        }
      } catch (error) {
        console.log('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

    
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
					        <li><a href="#">HOME</a></li>
					        <li><a href="#mu-book-overview">VUE D'ENSEMBLE</a></li>
					        <li><a href="#mu-author">AUTEUR</a></li>
				            <li><a href="#mu-pricing">PRIX</a></li>
				            <li><a href="#mu-testimonials">TEMOIGNAGE</a></li>
				            <li><a href="#mu-contact">CONTACT</a></li>
						
							{isSuperUser && ( 
							<button className="button" onClick={handleButtonClick} >UserList</button>
							)}
						
							<button className="button" onClick={logout}>Logout</button>
							<li><Link to="/profile">Profile</Link></li>
							{/* <li><Link to="/user-list">Users List</Link></li> */}
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
		

		<section id="home-intro">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-intro-area">
                <h1>Welcome to the Home Page</h1>
                <p>This is the introduction section of the home page.</p>
                <Link to="/books" className="btn btn-primary">View Books</Link>
				
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ajoutez ici d'autres sections ou composants pour la page d'accueil */}

      <section id="home-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-section-area">
                <h2>Book Overview</h2>
                <p>Discover more about our book collection by visiting the Books List page.</p>
                <Link to="/books/:id" className="btn btn-secondary">Explore Books</Link>
				<Link to="/loans/new" className="btn btn-primary">Créer un Prêt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
		
		<section id="mu-video-review">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-video-review-area">

							<div className="mu-heading-area">
								<h2 className="mu-heading-title">Check Out Our Video Review</h2>
								<span className="mu-header-dot"></span>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
							</div>

							
							<div className="mu-video-review-content">
								<iframe className="mu-video-iframe" width="100%" height="480" src="https://www.youtube.com/embed/T4ySAlBt2Ug" frameborder="0" allowfullscreen></iframe>
							</div>
							

						</div>
					</div>
				</div>
			</div>
		</section>
		
		<section id="mu-author">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-author-area">

							<div className="mu-heading-area">
								<h2 className="mu-heading-title">About The Author</h2>
								<span className="mu-header-dot"></span>
							</div>

							
							<div className="mu-author-content">
								<div className="row">
									<div className="col-md-6">
										<div className="mu-author-image">
											<img src="/assets/images/author.jpg" alt="Author Image"/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="mu-author-info">
											<h3>John Doe</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo suscipit facilis ipsum ullam reiciendis odio error iste neque ratione libero rem accusamus voluptatibus, nihil unde maiores sunt nisi. Assumenda, consectetur.</p>

											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, dolorem error neque! Dolores similique ut iusto odit esse ipsam, nesciunt pariatur animi minima maiores mollitia cupiditate ad ipsum deleniti perspiciatis!</p>
											<img className="mu-author-sign" src="/assets/images/author-signature.png" alt="Author Signature"/>

											<div className="mu-author-social">
												<a href="#"><i className="fa fa-facebook"></i></a>
												<a href="#"><i className="fa fa-twitter"></i></a>
												<a href="#"><i className="fa fa-linkedin"></i></a>
												<a href="#"><i className="fa fa-google-plus"></i></a>
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
		
		<section id="mu-testimonials">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-testimonials-area">
							<div className="mu-heading-area">
								<h2 className="mu-heading-title">What Our Readers Says</h2>
								<span className="mu-header-dot"></span>
							</div>

							<div className="mu-testimonials-block">
								<ul className="mu-testimonial-slide">

									<li>
										<p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
										<img className="mu-rt-img" src="/assets/images/reader-1.jpg" alt="img"/>
										<h5 className="mu-rt-name"> - Alice Boga</h5>
										<span className="mu-rt-title">CEO, Apple Inc.</span>
									</li>

									<li>
										<p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
										<img className="mu-rt-img" src="/assets/images/reader-2.jpg" alt="img"/>
										<h5 className="mu-rt-name"> - Jhon Doe</h5>
										<span className="mu-rt-title">Director, Google Inc.</span>
									</li>

									<li>
										<p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
										<img className="mu-rt-img" src="/assets/images/reader-3.jpg" alt="img"/>
										<h5 className="mu-rt-name"> - Jessica Doe</h5>
										<span className="mu-rt-title">Web Developer</span>
									</li>

								</ul>
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
export default Home;