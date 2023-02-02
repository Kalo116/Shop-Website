import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase";

import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from './navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    const signOutHandler = async () => {
        await signOutUser();
    };

    return (
        <Fragment>
            <NavigationContainer>

                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>

                <NavLinksContainer>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {currentUser
                        ? (
                            <NavLink as='span'
                                className="nav-link"
                                onClick={signOutHandler}
                            >
                                Sign out
                            </NavLink>
                        )
                        : (
                            <NavLink to='/auth'>
                                Sign in
                            </NavLink>
                        )}
                    <CartIcon />

                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;