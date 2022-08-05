import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '../../../Redux/homes/homesAction';

import SingleHome from './SingleHome';


const HomeContainer = ({homeData, fetchHome}) => {

   useEffect(() => {
    fetchHome()
   }, [])

    return homeData.loading ? (
        <h2>Loading.....</h2>
    ) : homeData.error ? (<p>{homeData.error}</p>) : (
        <div className='container mx-auto px-4 my-6'>
            <h2 className='text-center my-4 font-semibold text-3xl text-purple-500'>Homes</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 md:justify-between justify-items-center gap-6">
            {
                homeData && homeData.homes && homeData.homes.map(home => <SingleHome key={home._id} home={home}/>)
            }
            </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        homeData: state.homes

    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchHome: () => dispatch(fetchHomes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( HomeContainer);
