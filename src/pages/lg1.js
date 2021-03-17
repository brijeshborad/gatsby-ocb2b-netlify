import React, {Component} from "react";
import Helmet from "react-helmet"
import SEO from "../components/Seo"
import Tabs from "../components/AccordionTabs";

export default class Lg1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMore: false,
            tabDataAll: [
                {
                    title: 'I’ve had a hard time with online wholesale before because in order buy wholesale products, there are big Minimum Order Quantities—it’s hard to find wholesale suppliers for small business. How do you help with this?',
                    content: 'We understand this problem and our platform actually solves this. Many of our suppliers are happy to work with small businesses, and don’t require any MOQ.'
                },
                {
                    title: 'I know many fashion wholesale vendors don’t offer consignment inventory or consignment stock—it seems you do. How does this work?',
                    content: 'Some of the Suppliers in our network actually have consignment warehouses, so if you want consigned inventory from these consignment suppliers you’ll have to leave your information so one of our representatives can reach out to you.'
                },
                {
                    title: 'We’re looking for wholesale suppliers, especially wholesale suppliers in the USA, that are willing to be suppliers for our online store?',
                    content: 'These suppliers will be available to you, especially if your focus is on the USA. They have a lot of experience working with online stores.'
                },
                {
                    title: 'Is your platform more of a product sourcing website, product sourcing platform, or B2B online marketplace?',
                    content: 'We are probably best described as a product sourcing platform, though it can feel like a marketplace where you can choose products from different suppliers. You can access our websitefrom anywhere to see all of our offerings.'
                },
                {
                    title: 'Checking out wholesale merchandise catalogs via clothing marketplaces can be difficult because wholesale clothing vendors use confusing spreadsheets with poor images. This is a problem with most clothing vendors. Do you make this easier?',
                    content: 'Yes, everything including product description, stock levels, and prices can be viewed digitallyon our web platform. Each product listing also comes with at least 3 high quality images.'
                }
            ],
            tabDataLess: [
                {
                    title: 'I’ve had a hard time with online wholesale before because in order buy wholesale products, there are big Minimum Order Quantities—it’s hard to find wholesale suppliers for small business. How do you help with this?',
                    content: 'We understand this problem and our platform actually solves this. Many of our suppliers are happy to work with small businesses, and don’t require any MOQ.'
                },
                {
                    title: 'I know many fashion wholesale vendors don’t offer consignment inventory or consignment stock—it seems you do. How does this work?',
                    content: 'Some of the Suppliers in our network actually have consignment warehouses, so if you want consigned inventory from these consignment suppliers you’ll have to leave your information so one of our representatives can reach out to you.'
                },
                {
                    title: 'We’re looking for wholesale suppliers, especially wholesale suppliers in the USA, that are willing to be suppliers for our online store?',
                    content: 'These suppliers will be available to you, especially if your focus is on the USA. They have a lot of experience working with online stores.'
                },
            ],
            testimonialIndex: 0,
            testimonialImageIndex: 0,
            testimonialsImageList: [
                require('../assets/images/testimonials/testimonial-img-1.jpg'),
                require('../assets/images/testimonials/testimonial-img-2.jpg'),
                require('../assets/images/testimonials/testimonial-img-3.jpg')
            ],
            testimonialsList: [
                {
                    image: require('../assets/images/testimonials/testimonial-profile-1.png'),
                    content: 'Our team was thrilled when we found Open Coast. We’re now able to\n' +
                        'curate our online store with leading designers and our customers\n' +
                        'have responded really positively. Consistent access to this\n' +
                        'merchandise used to be a real challenge',
                    name: 'Ankita, Founder of Boutique Online Store'
                },
                {
                    image: require('../assets/images/testimonials/testimonial-profile-1.png'),
                    content: '-------------',
                    name: 'OpenCoast'
                }
            ],
        }
    }

    prevTestimonial() {
        this.setState(prevState => {
            let index;
            if (prevState.testimonialIndex - 1 >= 0) {
                index = prevState.testimonialIndex - 1;
            } else {
                index = prevState.testimonialIndex + 1;
            }
            return {
                testimonialIndex: index
            }
        })
    }

    nextTestimonial() {
        this.setState(prevState => {
            let index;
            if (prevState.testimonialIndex + 1 < prevState.testimonialsList.length) {
                index = prevState.testimonialIndex + 1;
            } else {
                index = 0;
            }
            return {
                testimonialIndex: index
            }
        })
    }

    setIndex(index) {
        this.setState({
            testimonialImageIndex: index
        })
    }


    scrollToSection(section) {
        section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    render() {
        return (
            <div>
                <Helmet title="Open Coast | Sourcing and Fulfillment Platform"/>
                <SEO
                    title="Sourcing and Fulfillment Platform"
                    description="Whether you're a Supplier or Retailer, getting set up and growing your business has never been easier"
                />
                <main className="info">
                    {/* header start */}
                    <header className="header" ref={ref => this.header = ref}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <nav className="navbar d-flex justify-content-between navbar-expand-lg">
                                        {/*Logo Start*/}
                                        <div className="logo">
                                            <a className="navbar-brand" href="#">
                                                <img className="img-fluid"
                                                     src={require("../assets/images/site-logo.png")} alt=""/>
                                            </a>
                                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                    data-target="#navbarSupportedContent"
                                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                                    aria-label="Toggle navigation">
                                                <span className='bar'/>
                                                <span className='bar'/>
                                                <span className='bar'/>
                                            </button>
                                        </div>
                                        {/*Logo End*/}


                                        {/*Menu Start*/}
                                        <div className="collapse navbar-menu navbar-collapse float-right"
                                             id="navbarSupportedContent">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active home">
                                                    <a className="nav-link " href="#Home"
                                                       onClick={() => this.scrollToSection(this.header)}>Home</a>
                                                </li>
                                                <li className="nav-item about">
                                                    <a className="nav-link " href="#about-us"
                                                       onClick={() => this.scrollToSection(this.aboutUs)}>About Us</a>
                                                </li>
                                                <li className="nav-item testimonial-menu">
                                                    <a className="nav-link " href="#testimonial"
                                                       onClick={() => this.scrollToSection(this.testimonials)}>Testimonials</a>
                                                </li>
                                                <li className="nav-item contact">
                                                    <a className="nav-link " href="#contact-us"
                                                       onClick={() => this.scrollToSection(this.contact)}>Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*Menu End*/}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* header end */}
                    {/*Banner Start*/}
                    <section className="banner text-center section-pt-lg">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-content mx-auto d-flex align-itmes-center">
                                        <h1>
                                            Famous brands <span>and</span> Designers <span>at</span> Wholesale
                                            Prices <span>For your</span> Online Store
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Banner End*/}

                    {/*Banner overlay Images Start*/}
                    <section className="banner-overlay-img section-pt-lg">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="banner-overlay-bg">
                                    <div className="banner-img img-1">
                                        <img src={require('../assets/images/info/banner/img1.png')} alt=""/>
                                    </div>
                                    <div className="banner-img">
                                        <img src={require('../assets/images/info/banner/img2.png')} alt=""/>
                                    </div>
                                    <div className="banner-img img-1">
                                        <img src={require('../assets/images/info/banner/img3.png')} alt=""/>
                                    </div>
                                    <div className="banner-img">
                                        <img src={require('../assets/images/info/banner/img4.png')} alt=""/>
                                    </div>
                                    <div className="banner-img img-1">
                                        <img src={require('../assets/images/info/banner/img5.png')} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Banner overlay Images End*/}

                    {/*Brand Start*/}
                    <section className="brand" ref={ref => this.aboutUs = ref}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title text-center">
                                        <h2>
                                            Trusted by <span>Thousands</span> <span className="title-saol"> of online Retailers globally </span>
                                        </h2>
                                    </div>
                                    <div className="title-content text-center">
                                        Access 600 Brands and 70,000 Wholesale Products, all in one place
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="brand-img">
                                        <img className="img-fluid"
                                             src={require('../assets/images/info/clients/clients.png')}
                                             alt="clients logo"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 mx-auto">
                                    <div className="brand-bottom-title text-center">
                                        <h3>
                                            As seen in
                                        </h3>
                                    </div>
                                    <div className="brand-bottom-img mx-auto d-flex">
                                        <img className="img-fluid"
                                             src={require("../assets/images/info/clients/client-2.png")} alt="..."/>
                                        <img className="img-fluid"
                                             src={require('../assets/images/info/clients/client-1.png')} alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Brand End*/}

                    {/*Right Place Start*/}
                    <section className="right-place section-pt-md-space">
                        <div className="left-img-wrapper">
                            <img className="" src={require('../assets/images/info/right-place/left.png')}
                                 alt="right place img"/>
                        </div>
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="title text-center">
                                        <h3>
                                            Are you an online Retailer that is constantly looking to expand your brand
                                            offering across all categories?
                                        </h3>
                                        <h2>
                                            You've come to the right place
                                        </h2>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mx-auto">
                                    <div className="right-place-content-bg d-flex">
                                        <div className="right-place-content">
                                            <p>Our B2B Sourcing platform is free and esay-to-use--Brousing products,
                                                brands, pricing form your computer or smarphone. No more struggling with
                                                complicated CSV files or Spreadsheets. We've made everything modern ands
                                                effortless.</p>
                                            <p>We work with authorized distributors of leading fashion brands and
                                                designers. All marchandise is certified authentic with a 110% cash back
                                                guarantee. All paperwork and sanitized invoices are available upon
                                                reqest.</p>
                                        </div>
                                        <div className="right-place-img">
                                            <img className="img-fluid"
                                                 src={require('../assets/images/info/right-place/right-1.png')}
                                                 alt="right place img"/>
                                            <img className="img-fluid"
                                                 src={require('../assets/images/info/right-place/right-2.png')}
                                                 alt="right place img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Right Place End*/}

                    {/*Get Form Start*/}
                    <section className="get-in-touch section-py-lg" ref={ref => this.contact = ref}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 pr-5">
                                    <div className="title">
                                        <h3 className="get-title">
                                            Why Us?
                                        </h3>
                                    </div>
                                    <div className="why-us-icon row">
                                        <div className="col-lg-4">
                                            <div className="icon-box-bg">
                                                <div className="icon-box p-2">
                                                    <div className="icon">
                                                        <img src={require('../assets/images/info/whyus/1.png')}
                                                             alt="why us "/>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5>
                                                            No Contracts
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="icon-box-bg">
                                                <div className="icon-box p-2">
                                                    <div className="icon">
                                                        <img src={require('../assets/images/info/whyus/2.png')}
                                                             alt="why us "/>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5>
                                                            No Monthly Membership Fees
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="icon-box-bg">
                                                <div className="icon-box p-2">
                                                    <div className="icon">
                                                        <img src={require('../assets/images/info/whyus/3.png')}
                                                             alt="why us "/>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5>
                                                            No Transaction Fees
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="why-choose-list">
                                        <ul>
                                            <li>
                                <span>
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 477.867 477.867"
                                         style={{
                                             enableBackground: 'new 0 0 477.867 477.867'
                                         }} xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
                                                    C477.726,107.033,370.834,0.141,238.933,0z M370.466,165.666L199.799,336.333c-6.665,6.663-17.468,6.663-24.132,0l-68.267-68.267
                                                    c-6.78-6.548-6.968-17.352-0.42-24.132c6.548-6.78,17.352-6.968,24.132-0.42c0.142,0.138,0.282,0.277,0.42,0.42l56.201,56.201
                                                    l158.601-158.601c6.78-6.548,17.584-6.36,24.132,0.419C376.854,148.567,376.854,159.052,370.466,165.666z"/>
                                            </g>
                                        </g>
                                    </svg>
                               </span>
                                                Affordable brands ranging from Tommy Hilfiger to nike, all the way to up
                                                Luxury brands like Alexander McQueen and Balanciaga.
                                            </li>

                                            <li>
                                <span>
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 477.867 477.867"
                                         style={{
                                             enableBackground: 'new 0 0 477.867 477.867'
                                         }} xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
                                                    C477.726,107.033,370.834,0.141,238.933,0z M370.466,165.666L199.799,336.333c-6.665,6.663-17.468,6.663-24.132,0l-68.267-68.267
                                                    c-6.78-6.548-6.968-17.352-0.42-24.132c6.548-6.78,17.352-6.968,24.132-0.42c0.142,0.138,0.282,0.277,0.42,0.42l56.201,56.201
                                                    l158.601-158.601c6.78-6.548,17.584-6.36,24.132,0.419C376.854,148.567,376.854,159.052,370.466,165.666z"/>
                                            </g>
                                        </g>
                                    </svg>
                               </span>
                                                We cover all the major fshion categories including: clothing, Shoes,
                                                Bags, Accessories, and Jewelry.
                                            </li>

                                            <li>
                                <span>
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 477.867 477.867"
                                         style={{
                                             enableBackground: 'new 0 0 477.867 477.867'
                                         }} xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
                                                    C477.726,107.033,370.834,0.141,238.933,0z M370.466,165.666L199.799,336.333c-6.665,6.663-17.468,6.663-24.132,0l-68.267-68.267
                                                    c-6.78-6.548-6.968-17.352-0.42-24.132c6.548-6.78,17.352-6.968,24.132-0.42c0.142,0.138,0.282,0.277,0.42,0.42l56.201,56.201
                                                    l158.601-158.601c6.78-6.548,17.584-6.36,24.132,0.419C376.854,148.567,376.854,159.052,370.466,165.666z"/>
                                            </g>
                                        </g>
                                    </svg>
                               </span>
                                                True Wholesale pricing 40% to 80% off MSRP. Our focus is Current Season
                                                offering but if you are a discount retailer thare are options to browser
                                                previose seasons too.
                                            </li>

                                            <li>
                                <span>
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 477.867 477.867"
                                         style={{
                                             enableBackground: 'new 0 0 477.867 477.867'
                                         }} xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
                                                    C477.726,107.033,370.834,0.141,238.933,0z M370.466,165.666L199.799,336.333c-6.665,6.663-17.468,6.663-24.132,0l-68.267-68.267
                                                    c-6.78-6.548-6.968-17.352-0.42-24.132c6.548-6.78,17.352-6.968,24.132-0.42c0.142,0.138,0.282,0.277,0.42,0.42l56.201,56.201
                                                    l158.601-158.601c6.78-6.548,17.584-6.36,24.132,0.419C376.854,148.567,376.854,159.052,370.466,165.666z"/>
                                            </g>
                                        </g>
                                    </svg>
                               </span>
                                                We have flexible solution for Retailers of all sizes ranging from
                                                Wholesale bulk Transactions to technology-focused tools like APIs
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="get-form-bg">
                                        <div className="title touch">
                                            <h3 className="get-title ">
                                                Get In Touch
                                            </h3>
                                        </div>
                                        <form className="get-form" data-netlify={true} method="POST">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input className="form-control" type="text" placeholder="John Dev"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input className="form-control" type="email"
                                                       placeholder="johndev@gmail.com"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="number">Phone Number</label>
                                                <input className="form-control" type="text" placeholder="0123456789"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="website">Website</label>
                                                <input className="form-control" type="text"
                                                       placeholder="www.website.com"/>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn form-btn">
                                                    See full brand list + catalog
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Get Form End*/}

                    {/*Suppliers Start*/}
                    <section className="suppliers section-py-lg">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title text-center">
                                        <h2>
                                            Our Suppliers
                                        </h2>
                                        <h4>
                                            Our Suppliers are based in landing fashion markets like
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="suppliers-img">
                                        <div className="img-wrapper mx-auto">
                                            <img className="" src={require('../assets/images/info/suppliers/1.png')}
                                                 alt=""/>
                                        </div>
                                        <div className="suppliers-content  text-center">
                                            <h4 className="mt-3">
                                                Italy
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="suppliers-img">
                                        <div className="img-wrapper mx-auto">
                                            <img className="" src={require('../assets/images/info/suppliers/2.png')}
                                                 alt=""/>
                                        </div>
                                        <div className="suppliers-content  text-center">
                                            <h4 className="mt-3">
                                                Uk
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="suppliers-img">
                                        <div className="img-wrapper mx-auto">
                                            <img className="" src={require('../assets/images/info/suppliers/3.png')}
                                                 alt=""/>
                                        </div>
                                        <div className="suppliers-content  text-center">
                                            <h4 className="mt-3">
                                                Spain
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="suppliers-img">
                                        <div className="img-wrapper mx-auto">
                                            <img className="" src={require('../assets/images/info/suppliers/4.png')}
                                                 alt=""/>
                                        </div>
                                        <div className="suppliers-content text-center">
                                            <h4 className="mt-3">
                                                USA
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Suppliers End*/}

                    {/*Mention Start*/}
                    <section className="mention section-pt-md-space section-pb-lg text-center">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title">
                                        <h2>
                                            Did we mention
                                        </h2>
                                    </div>
                                    <div className="mention-content">
                                        <h3>
                                            Many Of Our Wholesale Suppliers And Distributors Are Also Able To Provide
                                            Merchandise On Consignment, <span> With Very flexible Terms</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*mention End*/}

                    {/*Testimonial Start*/}
                    <section className="testimonial section-py-md" ref={ref => this.testimonials = ref}>
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title text-center">
                                        <h3>
                                            Here From Some Of Our Customers
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="testimonial-slider testimonial-one-slide">
                                        <div className="slider-content">
                                            {this.state.testimonialsList.map((item, index) => {
                                                return (
                                                    <div
                                                        className={`testimonial-content-background ${index === this.state.testimonialIndex ? 'active' : ''}`}
                                                        key={index}>
                                                        <div className="slider-img-wrapper">
                                                            <img className="img-fluid"
                                                                 src={item.image}
                                                                 alt="testimonial img"/>
                                                        </div>
                                                        <div className="content">
                                                            <h5>
                                                                {item.content}
                                                            </h5>
                                                            <h2>
                                                                {item.name}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="navigator">
                                            <div className='slide-prev' onClick={() => this.prevTestimonial()}>
                                                <i className="fas fa-chevron-left"/>
                                            </div>
                                            <div className='slide-next' onClick={() => this.nextTestimonial()}>
                                                <i className="fas fa-chevron-right"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="testimonial-wrapper">
                                        <div className="testimonial-slide-1">
                                            {this.state.testimonialsImageList.map((item, index) => {
                                                return <img key={index}
                                                            className={`img-fluid ${index === this.state.testimonialImageIndex ? 'active' : ''}`}
                                                            src={item} alt=""/>
                                            })}
                                        </div>
                                        <div className="navigator-dotes">
                                            <ul>
                                                {this.state.testimonialsImageList.map((item, index) => (
                                                    <li key={index} onClick={() => this.setIndex(index)}
                                                        className={index === this.state.testimonialImageIndex ? 'active' : ''}/>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Testimonial End*/}

                    {/*According Start*/}
                    <section className="according-questions section-py-lg">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title text-center mb-5">
                                        <h2>
                                            Have Any Questions?
                                        </h2>
                                    </div>
                                    <div className="accordion" id="accordionExample">
                                        <Tabs tabData={[
                                            {
                                                tabData: (this.state.viewMore ? this.state.tabDataAll : this.state.tabDataLess)
                                            }
                                        ]}/>


                                        <button className="btn according-btn mx-auto" onClick={() => {
                                            this.setState(prevState => {
                                                return {
                                                    viewMore: !prevState.viewMore
                                                }
                                            })
                                        }}>
                                            View {this.state.viewMore ? 'Less' : 'More'}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    {/*According End*/}

                    {/*Footer Start*/}
                    <footer className="section-py-lg footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer-logo">
                                        <img src={require('../assets/images/info/footer-logo.png')} alt=""/>
                                    </div>

                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-content">
                                        <div className="footer-title">
                                            <h3>
                                                New york
                                            </h3>
                                        </div>
                                        <div className='footer-content-bg'>
                                            <p>240 Kent Avenue Brookln, New york 11249</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-content">
                                        <div className="footer-title">
                                            <h3>
                                                Luxembourg
                                            </h3>
                                        </div>
                                        <div className='footer-content-bg'>
                                            <p>29, BLDG Prince Henri L - 1724 LU </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-content">
                                        <div className="footer-title">
                                            <h3>
                                                Connect
                                            </h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#"> Blog</a>
                                            </li>
                                            <li>
                                                <a href="#"> Instagram</a>
                                            </li>
                                            <li>
                                                <a href="#"> Facebook</a>
                                            </li>
                                            <li>
                                                <a href="#"> Twitter</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/*Footer End*/}
                </main>
            </div>
        )
    }
}