import './App.css';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SuperNavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import RequireAuth from "./components/common/RequireAuth/RequireAuth";
import Preloader from "./components/common/Preloader/Preloader";
import {getUserData} from "./redux/auth_reducer";

const App = () => {
    const dispatch = useDispatch();
    const isInitialized = useSelector(state => state.auth.isInitialized);

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);

    if (!isInitialized) return <Preloader/>;

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <SuperNavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route element={<RequireAuth/>}>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}


export default App;
