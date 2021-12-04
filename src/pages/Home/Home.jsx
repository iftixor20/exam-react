import './Home.scss';
import { Link } from 'react-router-dom';

//Images
import PrevBtn from '../../assets/img/prevBtn.png';
import NextBtn from '../../assets/img/nextBtn.png';
import HomeUser from '../../assets/img/home-user.png';
import Food from '../../assets/img/food.png';
import RenderVideos from '../../components/RenderVideos/RenderVideos';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-section">
                    <div className="home-section__top">
                        <Link className="home-section__top-left" to="/channel">
                            <img
                                src={HomeUser}
                                alt="home-user"
                                width={50}
                                height={50}
                            />
                            <h2>Dollie Blair</h2>
                        </Link>
                        <div className="home-section__top-right">
                            <button>
                                <img src={PrevBtn} alt="" />
                            </button>
                            <button>
                                <img src={NextBtn} alt="" />
                            </button>
                        </div>
                    </div>
                    <RenderVideos width={250} height={200} imgHeight={150} />
                </div>
                <div className="home-section">
                    <div className="home-section__top">
                        <h2>Recommended</h2>
                        <div className="home-section__top-right">
                            <button>
                                <img src={PrevBtn} alt="" />
                            </button>
                            <button>
                                <img src={NextBtn} alt="" />
                            </button>
                        </div>
                    </div>
                    <RenderVideos width={540} height={300} imgHeight={250} />
                </div>
                <div className="home-section">
                    <div className="home-section__top">
                        <Link className="home-section__top-left" to="/channel">
                            <img
                                src={Food}
                                alt="home-user"
                                width={50}
                                height={50}
                            />
                            <h2>Food & Drink</h2>
                        </Link>
                        <div className="home-section__top-right">
                            <button>
                                <img src={PrevBtn} alt="" />
                            </button>
                            <button>
                                <img src={NextBtn} alt="" />
                            </button>
                        </div>
                    </div>
                    <RenderVideos width={250} height={200} imgHeight={150} />
                </div>
            </div>
        </>
    );
};

export default Home;
