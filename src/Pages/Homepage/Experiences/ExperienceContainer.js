import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchExperiences } from '../../../Redux/experience/experienceAction';
import SingleExperience from './SingleExperience';

const ExperienceContainer = ({ experienceData, fetchExperience }) => {
  useEffect(() => {
    fetchExperience();
  }, []);

  console.log(experienceData);
  if (experienceData.loading) {
    return <h1>Loading.......</h1>;
  }

  if (experienceData.error) {
    toast.error(experienceData.error);
  }

  return (
    <div className="container mx-auto px-4 my-6">
      <h2 className="text-center my-4 font-semibold text-3xl text-purple-500">
        Experiences
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 md:justify-between justify-items-center gap-6">
        {experienceData.experience.map((e) => (
          <SingleExperience key={e._id} experience={e} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experienceData: state.experience,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExperience: () => dispatch(fetchExperiences()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceContainer);
