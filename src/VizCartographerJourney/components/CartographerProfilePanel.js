import React from 'react';
import Img from 'react-image';
import { getCartographerProfile } from '../utils/helper';
import placeholder from '../../assets/imgs/person.jpeg';
import FoamNavbar from '../../common-utils/components/FoamNavbar';

const CartographerProfilePanel = props => {
  const {
    display,
    cartographerAddress,
    profileAnalytics,
    changeMapView,
    displayMode2D
  } = props;
  const [cartographer, updateCartographer] = React.useState({});
  const [cartographerProfilePic, updateProfilePic] = React.useState('#');

  React.useEffect(() => {
    if (cartographerAddress) {
      getCartographerProfile(cartographerAddress)
        .then(details => {
          const cartographerProfilePic = `https://ipfs.infura.io:5001/api/v0/cat?arg=${details.image[0].contentUrl['/']}`;
          updateCartographer(details);
          updateProfilePic(cartographerProfilePic);
        })
        .catch(error => {
          console.log('error in getting', error);
        });
    }
  }, [cartographerAddress]);

  if (!display) return null;

  return (
    <div className="abs-container ">
      <div className="dm-none get-w-100">
        <FoamNavbar
          title="Cartographer's journey"
          info="Part of FOAMViz project"
          width="100%"
        />
      </div>
      <div className="main-container profile-container">
        <div className="profile-panel m-ml1 c-profile-panel-top">
          <Img
            className="cartographer-profile-pic"
            src={cartographerProfilePic}
            loader={
              <div className="lds-spinner control-panel-top">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            }
            unloader={
              <img alt="img" className="placeholder-img" src={placeholder} />
            }
          />
          <h2>{cartographer.name}</h2>
        </div>
        <hr className="dm-none control-panel-divider" />
        <div className="m-flx c-profile-panel-bottom">
          {/* <p>MAP VIEW</p> */}
          {/* <div className="profile-panel">
            
          </div> */}
          <div className="toggleButton mb-2">
            <button
              type="submit"
              className="view-btn"
              style={{
                background: displayMode2D ? '#2e2d2c' : 'black',
                borderRadius: '3.5px 0px 0px 3.5px'
              }}
              onClick={() => changeMapView('2d')}
            >
              2D
            </button>
            <button
              type="submit"
              className="view-btn"
              style={{
                background: !displayMode2D ? '#2e2d2c' : 'black',
                borderRadius: '0px 3.5px 3.5px 0px'
              }}
              onClick={() => changeMapView('3d')}
            >
              3D
            </button>
          </div>

          <div className="cartographer-analytics">
            {/* <p className="dm-none">ANALYTICS</p> */}
            <div className="mb-2">
              {/* <span className="big-int m-big-int">{profileAnalytics.pointsAdded}</span> */}
              <span className="fs-22">{profileAnalytics.pointsAdded}</span>
              {/* <p className="analytic-value-title">points added</p> */}
              <p className="tooltip-key count-bottom">Total Points Added</p>
            </div>
            <div>
              {/* <span className="big-int m-big-int">{profileAnalytics.pointsChallenged}</span> */}
              <span className="fs-22">{profileAnalytics.pointsChallenged}</span>
              {/* <p className="analytic-value-title">points challenged</p> */}
              <p className="tooltip-key count-bottom">
                Total Points Challenged
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartographerProfilePanel;
