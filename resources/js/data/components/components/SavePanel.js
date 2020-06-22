import React from 'react'
import styled from 'styled-components'

const SavePanel = () => {
    return (
        <Div>
            <div className="schedule-bottom row">
                <div className="col-md-6 agileinfo_schedule_bottom_left">
                    <img src="images/mid.jpg" alt=" " className="img-responsive" />
                </div>
                <div className="col-md-6 agileits_schedule_bottom_right">
                    <div className="w3ls_schedule_bottom_right_grid row">
                        <h3>Save up to <span>50%</span> in this week</h3>
                        <p>Suspendisse varius turpis efficitur erat laoreet dapibus.
					Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.</p>
                        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <h4>Customers</h4>
                            <h5 className="counter">653</h5>
                        </div>
                        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            <h4>Events</h4>
                            <h5 className="counter">823</h5>
                        </div>
                        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                            <i className="fa fa-shield" aria-hidden="true"></i>
                            <h4>Awards</h4>
                            <h5 className="counter">45</h5>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
max-width:1650px;
margin:50px auto;

.schedule-bottom {
    background: #2fdab8;
}
.agileits_schedule_bottom_right,.agileinfo_schedule_bottom_left {
    padding: 0;
}
.agileinfo_schedule_bottom_left img{
	width:100%;
}
.w3ls_schedule_bottom_right_grid{
    padding: 3em 2em;
    background: #fff;
    margin: 6.5em 0 0;
    width: 90%;
    box-shadow: 5px 0px 10px #19a98c;

}
.w3ls_schedule_bottom_right_grid h3{
    text-transform: uppercase;
    font-size: 1.4em;
    color: #212121;
    letter-spacing: 2px;
    font-weight: 700;
}
.w3ls_schedule_bottom_right_grid h3 span{
	color:#fc636b;
}
.w3ls_schedule_bottom_right_grid p{
	margin:1em 0 2em;
    color: #545454;
	line-height:2em;
}
.w3l_schedule_bottom_right_grid1{
	text-align:center;
}
.w3l_schedule_bottom_right_grid1 i{
    font-size: 1.5em;
    color: #2fdab8;
    display: block;
	
}
.w3l_schedule_bottom_right_grid1 h4{
	margin: 1em 0;
    color: #212121;
    text-transform: uppercase;
    font-size: 1em;
	letter-spacing: 2px;
}
.w3l_schedule_bottom_right_grid1 h5{
	font-size:2em;
	color:#212121;
	font-weight:600;
}
h3.wthree_text_info {
    font-size: 2.5em;
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
    color: #000;
    margin-bottom: 1em;
    text-transform: uppercase;
}
h3.wthree_text_info span{
  font-weight:300;
}
`

export default SavePanel
