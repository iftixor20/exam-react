import './RenderVideos.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

//Context
import { GetData } from '../../context/GetData';

//Hooks
import RandomDate from '../../Hooks/RandomDate';

import { useContext } from 'react';

const RenderVideos = ({
    margin = 36,
    width,
    height,
    display = 'row',
    imgHeight,
    n = 0,
    k = 10,
}) => {
    const array = useContext(GetData);
    const Loading = array[1];

    const newArray = array[0].splice(n, k);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: display,
                    overflow: 'hidden',
                }}
            >
                <SkeletonTheme baseColor="#303030" highlightColor="#444">
                    {Loading
                        ? Array.from(new Array(k - n)).map((e, i) => (
                              <div
                                  key={i}
                                  className="video-link"
                                  style={{
                                      width: width + 'px',
                                      height: height + 'px',
                                      marginRight: margin + 'px',
                                  }}
                              >
                                  <p
                                      style={{
                                          margin: 0,
                                          padding: 0,
                                          marginBottom: 3 + 'px',
                                      }}
                                  >
                                      <Skeleton
                                          style={{
                                              height: imgHeight + 'px',
                                              borderRadius: 14 + 'px',
                                          }}
                                      />
                                  </p>
                                  <p
                                      style={{
                                          margin: 0,
                                          padding: 0,
                                          marginBottom: 5 + 'px',
                                      }}
                                  >
                                      <Skeleton />
                                  </p>
                                  <p
                                      style={{
                                          margin: 0,
                                          padding: 0,
                                          width: '70%',
                                      }}
                                  >
                                      <Skeleton />
                                  </p>
                              </div>
                          ))
                        : newArray.map((e) => (
                              <Link
                                  key={e.id}
                                  className="video-link"
                                  style={{
                                      width: width + 'px',
                                      height: height + 'px',
                                      marginRight: margin + 'px',
                                  }}
                                  to="/video"
                              >
                                  <img
                                      src={e.thumbnailUrl}
                                      style={{
                                          width: 100 + '%',
                                          height: imgHeight + 'px',
                                      }}
                                      loading="lazy"
                                      alt=""
                                  />
                                  <h3>{e.title}</h3>
                                  <div className="video-link__bottom">
                                      <p>
                                          {Math.round(Math.random() * 1000)}k
                                          views - {RandomDate()} ago
                                      </p>
                                      <p>Dollie Blair</p>
                                  </div>
                              </Link>
                          ))}
                </SkeletonTheme>
            </div>
        </>
    );
};

export default RenderVideos;
