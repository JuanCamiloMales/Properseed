import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import Box from '@mui/material/Box';
import InteractiveList from './NotificationList';

import { IoIosNotificationsOutline } from "react-icons/io";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


import PropTypes from 'prop-types';
import { styled } from '@mui/system';


export default function SimplePopup(
  {
    notifications,
  }
) {

  const [open, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setOpen((prev) => !prev);
    setAnchor(anchor ? null : event.currentTarget);
  };
  const id = open ? 'simple-popup' : undefined;
  const handleClickAway = (event) => {
    if (open) {
      setOpen(false);
      setAnchor(anchor ? null : event.currentTarget);
    }
  };

  const [valor, setValor] = React.useState("");

  const enviarEvento = (valor) => {
    // Hacer algo con el valor
    console.log(valor)
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <button
          type="button"
          className="Button"
          aria-describedby={id}
          onClick={handleClick}
        ><IoIosNotificationsOutline size="3rem" color="#273746" />
        </button>
        <BasePopup className="BasePopupCustom" id={id} open={open} anchor={anchor} placement="bottom-end" withTransition>
          {(props) => (
            <PopAnimation {...props}>

              <div className="CustomPopup">
                <InteractiveList notifications={notifications} enviarEvento={enviarEvento}>

                </InteractiveList>
              </div>

            </PopAnimation>
          )}

        </BasePopup>

        <Styles />
      </Box>
    </ClickAwayListener>
  );
}

function Styles() {  
  return (
    <style>{`
        .Button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          width: 60px;
          background-color: white;
          padding: 8px 8px;
          border-radius: 8px;
          color: white;
          transition: all 150ms ease;
          cursor: pointer;
          border: 1px solid;
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
    
          &:hover {
            background-color: #f5f5f5;
          }
    
          &:active {
            background-color: #f5f5f5;
            box-shadow: none;
          }
    
          &:focus-visible {
            box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
            outline: none;
            }
        }
        
        .BasePopupCustom{
        z-index:1000;
        }

        .CustomPopup{
          background-color: white;
          border-radius: 8px;
          border: 1px solid #f5f5f5;
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
          padding: 0.75rem;
          color: #142157;
          font-size: 0.875rem;
          font-family: 'IBM Plex Sans', sans-serif;
          font-weight: 500;
          opacity: 1;
          margin: 0.5rem 0px;
        }
    `}</style>
  );
}



function Animated(props) {
  const { requestOpen, onEnter, onExited, children, className } = props;
  React.useEffect(() => {
    if (requestOpen) {
      onEnter();
    }
  }, [onEnter, requestOpen]);

  const handleAnimationEnd = React.useCallback(() => {
    if (!requestOpen) {
      onExited();
    }
  }, [onExited, requestOpen]);

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={className + (requestOpen ? ' open' : ' close')}
    >
      {children}
    </div>
  );
}

Animated.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onEnter: PropTypes.func.isRequired,
  onExited: PropTypes.func.isRequired,
  requestOpen: PropTypes.bool.isRequired,
};

const PopAnimation = styled(Animated)`
  @keyframes open-animation {
    0% {
      opacity: 0;
      transform: translateY(-8px) scale(0.95);
    }

    50% {
      opacity: 1;
      transform: translateY(4px) scale(1.05);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes close-animation {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    50% {
      opacity: 1;
      transform: translateY(4px) scale(1.05);
    }

    100% {
      opacity: 0;
      transform: translateY(-8px) scale(0.95);
    }
  }

  &.open {
    animation: open-animation 0.4s ease-in forwards;
  }

  &.close {
    animation: close-animation 0.4s ease-in forwards;
  }
`;
