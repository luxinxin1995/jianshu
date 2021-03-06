import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import {Border,HeaderWrapper,Logo,Nav,NavItem,Beta,SearchWrapper,NavSearch,Addition,Button} from './style'
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            focused:false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    render() {
        return (
            <div>
                <Border>
                <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right"><Beta/></NavItem>
                        <NavItem className="right">
                            <i className="iconfont font24">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.state.focused}
                                timeout={500}
                                classNames="slide"
                            >
                                <NavSearch onBlur={this.handleInputBlur} onFocus={this.handleInputFocus} className={this.state.focused ? 'focused' : ''}></NavSearch>
                            </CSSTransition>
                                <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont font19">&#xe62d;</i>
                            写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
                </Border>
            </div>
        )
    }
    handleInputFocus(){
        this.setState({
            focused:true
        })
    }
    handleInputBlur(){
        this.setState({
            focused:false
        })
    }
}
