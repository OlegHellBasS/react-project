import {useSelector} from "react-redux";

import css from './pleyList.css'

import {MyPleyList} from "../../componets";

const PageMyPleyList = () => {

    const {myPleyList} = useSelector(state => state.movieCard);

    return (

        <div className={'wrapPleyList'}>

            {myPleyList.length && myPleyList.map((myPleyList,index) => <MyPleyList key={index} myPleyList={myPleyList}/>)}

        </div>
    );
};

export {PageMyPleyList};