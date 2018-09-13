import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import { connect } from 'react-redux';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreators } from './store';

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4457/496b91e42ad17897c0c0ded08385c95911870459.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='' />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    componentWillMount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        //console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})
export default connect(mapState, mapDispatch)(Home);