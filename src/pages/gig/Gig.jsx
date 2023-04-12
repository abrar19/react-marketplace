import React from 'react';
import './gig.scss'
import Slider from 'infinite-react-carousel'

const Gig = () => {
    return (
        <div className='gig'>
            <div className="container">
                <div className="left">
                    <span className="breadcrumbs">MARKETPLACE &gt; GRAPHICS & DESIGN &gt;</span>
                    <h1>I will create AI Generated art for you.</h1>
                    <div className="user">
                        <img src="/img/img3.jpg" alt="" className='pp'/>
                        <span>John Doe</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider slideToShow={1} className="slider">
                        <img src="/img/img1.jpg" alt="" />
                        <img src="/img/img2.jpg" alt="" />
                        <img src="/img/img3.jpg" alt="" />
                    </Slider>
                    <h2>About this Gig</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, recusandae impedit saepe laboriosam vitae iusto molestiae sequi ut, dolorum perspiciatis, harum minima quo ipsam nesciunt adipisci id. Praesentium repellat, explicabo, natus enim ex delectus sunt libero sit necessitatibus, quibusdam magnam. Reprehenderit eveniet iusto quos delectus pariatur unde, explicabo vero aliquid commodi magni eos beatae illo sequi ducimus ut cum voluptates at, debitis aperiam? Dolores, officiis. Incidunt expedita magnam dolorem quaerat voluptas nihil tenetur. Molestias, culpa. Dolor aspernatur alias explicabo ex veniam vel quasi quae in sint officia sunt cupiditate rerum aliquam, iusto esse commodi nemo quis assumenda reiciendis cum? Blanditiis, fugit facere autem aliquam enim dignissimos distinctio, aspernatur mollitia sit dolorem quod maiores! 
                    </p>
                    <div className="seller">
                        <h2>About the Seller</h2>
                        <div className="user">
                            <img src="/img/img1.jpg" alt="" />
                            <div className="info">
                                <span>John Doe</span>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">USA</span>
                                </div>
                                <div className="item">
                                    <span className="title">Last Delivery</span>
                                    <span className="desc">1 Day</span>
                                </div>
                                <div className="item">
                                    <span className="title">Languages</span>
                                    <span className="desc">English</span>
                                </div>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptatibus doloribus eaque quam inventore dolor, eum mollitia rerum distinctio beatae ipsa odio, porro perferendis eius quaerat alias repellat, ratione dolorem nostrum! Autem suscipit velit tempore consequuntur ullam. Natus voluptatum accusamus blanditiis, a laboriosam fugit, nulla nisi eos dolorem non dolores.
                            </p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img src="/img/img2.jpg" alt="" className='pp'/>
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="/img/germany.png" alt="" />
                                        <span>Germany</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus fugit odit animi fugiat velit excepturi neque dolorem quasi consectetur ratione voluptate magni blanditiis quam, dolores quidem officia nisi autem sed ex ab, nesciunt dicta. Eos quo eaque, consequatur officia minima quam, dicta nesciunt culpa velit a illum aliquid dolor.</p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img src="/img/img2.jpg" alt="" className='pp'/>
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="/img/germany.png" alt="" />
                                        <span>Germany</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus fugit odit animi fugiat velit excepturi neque dolorem quasi consectetur ratione voluptate magni blanditiis quam, dolores quidem officia nisi autem sed ex ab, nesciunt dicta. Eos quo eaque, consequatur officia minima quam, dicta nesciunt culpa velit a illum aliquid dolor.</p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img src="/img/img2.jpg" alt="" className='pp'/>
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="/img/germany.png" alt="" />
                                        <span>Germany</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus fugit odit animi fugiat velit excepturi neque dolorem quasi consectetur ratione voluptate magni blanditiis quam, dolores quidem officia nisi autem sed ex ab, nesciunt dicta. Eos quo eaque, consequatur officia minima quam, dicta nesciunt culpa velit a illum aliquid dolor.</p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>1 AI Generated Image</h3>
                        <h2>$ 59.99</h2>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, soluta!</p>
                    <div className="details">
                        <div className="item">
                            <img src="/img/clock.png" alt="" />
                            <span>2 Days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/recycle.png" alt="" />
                            <span>3 Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Promt writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Artwork Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Image Upscaling</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Additional Design</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Gig;
