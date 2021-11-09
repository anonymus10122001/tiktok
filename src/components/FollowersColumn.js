import Badge from '@material-ui/core/Badge';
import { Home, LiveTv, PeopleAlt } from '@material-ui/icons';
import styled from 'styled-components'
import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

const SliderContainer = styled.div`
    
    margin-top: 10px;
`;
const SliderWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;
const SliderLeft = styled.div`
    // flex:1;
    // display: flex;
    // align-items: center;
    
    text-align: left;
    margin-left: 50%;
`;

const SliderTop = styled.div`

  
` ;
const SliderBottom = styled.div`

   border-top: 1px solid lightgray;
` ;


const SliderVin = styled.span`
    color: red;
    font-size: 10px;
    margin-left: 50px;
`;

const SliderTop2 = styled.div`

    border-top: 1px solid lightgray;
` ;
const SliderBottom2 = styled.div`

    border-top: 1px solid lightgray;
` ;

const SliderTrend = styled.div`
    border: 1px solid lightgray;
    display:flex;
    // align-items: center;
    // padding: 10px;
    // margin-left:25px;
    border-radius: 10px;

`;

const SliderTop4 = styled.div`

    border-top: 1px solid lightgray;
` ;

const SliderMenuItem = styled.div`
    fort-size: 14px;
    cursor: pointer;
    // margin-left: 25px;
    padding: 5px;
`;



const FollowersColumn = () => {
    return (
        <SliderContainer>
            <SliderWrapper>
                <SliderLeft>
                    <SliderTop>
                        <Link>
                          <SliderMenuItem>
                              <Badge  color="primary">
                                  <Home style={{marginRight:20, fontSize:40}}/> 
                                  <h1 style={{marginTop:20, fontSize:20}}>For you</h1>
                              </Badge>
                          </SliderMenuItem>
                        </Link>

                        <Link>
                          <SliderMenuItem>
                              <Badge  color="primary">
                                  <PeopleAlt style={{marginRight:20, fontSize:40}}/> 
                                  <h1 style={{marginTop:20, fontSize:20}}>Following</h1>
                              </Badge>
                          </SliderMenuItem>
                        </Link>

                        <Link>
                          <SliderMenuItem>
                              <Badge  color="primary">
                                  <LiveTv style={{marginRight:20, fontSize:40}}/> 
                                  <h1 style={{marginTop:20, fontSize:20}}>LIVE</h1>
                              </Badge>
                          </SliderMenuItem>
                        </Link>
                       
                        
                    </SliderTop>
                    <SliderBottom>
                        
                        <h1 style={{color:"black",fontSize:20}} >Suggested accounts <SliderVin >See all</SliderVin></h1>
                                                
                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/84521965_1586322048183451_2294998362820182016_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KW3NRGtJY1cAX-FSDhm&tn=k1ECe9miwGmDhCCc&_nc_ht=scontent.fdad3-4.fna&oh=c737c59fad25f483aa83eba5b240d757&oe=61AFE447" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Nguyễn Văn Huy</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-1/p200x200/205428509_1683794492009384_8885256783549298808_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nSo4tXnUBZgAX_m5QD5&_nc_ht=scontent.fdad3-3.fna&oh=07f1686186b2b06fae0eb488c5d3e725&oe=61B00BF1" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Lương Văn Triều</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-1/p200x200/244545643_1496771267356097_2071070013757594011_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Hy5AhFadgOYAX_HoVqI&_nc_ht=scontent.fdad3-1.fna&oh=308ca46c3cec0c267a8e1473870427cc&oe=61AD4974" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Bùi Công Thiện</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.6435-1/p200x200/196131369_1417424348616126_1998418931747082045_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=OH6vr8s_owAAX8cZ4gl&_nc_ht=scontent.fdad3-2.fna&oh=81beba3dcb9083393f9eb1a875a72708&oe=61AFB061" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Phạm Quang Thuần</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/84521965_1586322048183451_2294998362820182016_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KW3NRGtJY1cAX-FSDhm&tn=k1ECe9miwGmDhCCc&_nc_ht=scontent.fdad3-4.fna&oh=c737c59fad25f483aa83eba5b240d757&oe=61AFE447" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Nguyễn Văn Huy</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>
                    </SliderBottom>
                    <SliderTop2>
                        <h1 style={{color:"black",fontSize:20}} >Following accounts <SliderVin >See More</SliderVin></h1>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/84521965_1586322048183451_2294998362820182016_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KW3NRGtJY1cAX-FSDhm&tn=k1ECe9miwGmDhCCc&_nc_ht=scontent.fdad3-4.fna&oh=c737c59fad25f483aa83eba5b240d757&oe=61AFE447" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Nguyễn Văn Huy</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-1/p200x200/205428509_1683794492009384_8885256783549298808_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nSo4tXnUBZgAX_m5QD5&_nc_ht=scontent.fdad3-3.fna&oh=07f1686186b2b06fae0eb488c5d3e725&oe=61B00BF1" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Lương Văn Triều</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-1/p200x200/244545643_1496771267356097_2071070013757594011_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Hy5AhFadgOYAX_HoVqI&_nc_ht=scontent.fdad3-1.fna&oh=308ca46c3cec0c267a8e1473870427cc&oe=61AD4974" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Bùi Công Thiện</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.6435-1/p200x200/196131369_1417424348616126_1998418931747082045_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=OH6vr8s_owAAX8cZ4gl&_nc_ht=scontent.fdad3-2.fna&oh=81beba3dcb9083393f9eb1a875a72708&oe=61AFB061" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Phạm Quang Thuần</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>

                        <Link>
                        <SliderMenuItem>
                            <Badge  color="primary">
                                <img className="personal" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/84521965_1586322048183451_2294998362820182016_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KW3NRGtJY1cAX-FSDhm&tn=k1ECe9miwGmDhCCc&_nc_ht=scontent.fdad3-4.fna&oh=c737c59fad25f483aa83eba5b240d757&oe=61AFE447" style={{marginRight:20 }}/>
                                <p className='text-name' style={{marginTop:10, fontSize:20}}>Nguyễn Văn Huy</p>
                            </Badge>
                        </SliderMenuItem>
                        </Link>
                    </SliderTop2>
                    <SliderBottom2>
                        <h1 style={{color:"black",fontSize:13}} >Discover</h1>

                        <Link>
                          <SliderTrend>
                              #thuthachlongtieng
                          </SliderTrend>
                        </Link>

                        <Link>
                          <SliderTrend>
                              #thuthachlongtieng
                          </SliderTrend>
                        </Link>

                        <Link>
                          <SliderTrend>
                              #thuthachlongtieng
                          </SliderTrend>
                        </Link>

                        <Link>
                          <SliderTrend>
                              #thuthachlongtieng
                          </SliderTrend>
                        </Link>

                        <Link>
                          <SliderTrend>
                              #thuthachlongtieng
                          </SliderTrend>
                        </Link>
                    </SliderBottom2>
                    <SliderTop4>
                        TópTóp2001
                    </SliderTop4>
                </SliderLeft>
               
            </SliderWrapper>
        </SliderContainer>


    )
    
}

export default FollowersColumn
