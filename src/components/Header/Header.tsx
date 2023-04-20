import * as React from 'react';
import SearchInput from '../SearchInput/';
import { TeachOnUdemyDropdown } from './TeachOnUdemyDropdown';
import UdemyLogo from '../../assets/svgs/logo-udemy.svg';
import './Header.css';

type HeaderLink = {
  title: string;
  dropdown: (
    index: number,
    buttonStyle: React.CSSProperties
  ) => React.ReactNode;
  style: {
    color: string;
    border: string;
    backgroundColor: string;
  };
};

type HeaderIcon = {
  linkIcon: React.ElementType;
  iconDropdown: React.ElementType;
};

type HeaderProps = {
  // headerLinks: HeaderLink[];
  headerIcons: HeaderIcon[];
};

const headerRightMenuItems = [
  {
    title: 'Udemy Business',
    style: {
      color: '#fff',
      backgroundColor: '#1c1d1f',
      border: '0px',
    },
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyDropdown
        title1='Get your team access to over'
        title2='19000 top Udemy courses,'
        title3='anytime, anywhere.'
        buttonTitle='Try Udemy Business'
        buttonStyle={buttonStyle}
      />
    ),
  },

  {
    title: 'Teach on Udemy',
    style: {
      color: '#fff',
      backgroundColor: '#1c1d1f',
      border: '0px',
    },
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyDropdown
        title1='Turn what you know into an'
        title2='opportunity and reach'
        title3='millions around the world.'
        buttonTitle='Learn more'
        buttonStyle={buttonStyle}
      />
    ),
  },
  {
    title: 'My learning',
    style: {
      color: '#1c1d1f',
      backgroundColor: 'white',
      border: '2px solid #1c1d1f',
    },
    dropdown: (index: number, buttonStyle: React.CSSProperties) => (
      <TeachOnUdemyDropdown
        title1='Start learning from over'
        title2='213,000 courses today.'
        title3=''
        buttonTitle='Browse now'
        buttonStyle={buttonStyle}
      />
    ),
  },
];

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { headerIcons } = props;

  const [dropDownToShow, setDropDownToShow] = React.useState<number | null>(
    null
  );

  const [dropDownIconVisible, setDropDownIconVisible] = React.useState<
    number | null
  >(null);

  const toggleDropDown = (value: number | null) => setDropDownToShow(value);

  const toggleIconDropDown = (value: number | null) =>
    setDropDownIconVisible(value);

  const renderRightNavItems = () => {
    return (
      <>
        {/* nav links ??? main Nav ??? sub Nav */}
        {headerRightMenuItems.map((link, index) => {
          // Declare dropdown style object outside of return statement
          const dropdownStyle: React.CSSProperties = {
            position: 'absolute',
            right: index === 0 ? '438px' : index === 1 ? '312px' : '216px',
          };

          const buttonStyle: React.CSSProperties = {
            color: link.style.color,
            border: link.style.border,
            backgroundColor: link.style.backgroundColor,
          };

          return (
            <div key={index}>
              <div
                className='teach-on-udemy'
                onMouseEnter={() => {
                  toggleDropDown(index);
                }}
                onMouseLeave={() => {
                  toggleDropDown(null);
                }}
              >
                <a
                  href='#'
                  target='_blank'
                  rel='noopener'
                  className='teach-on-udemy-anchor'
                >
                  <span className='teach-on-udemy-text'>{link.title}</span>
                </a>
              </div>

              {dropDownToShow === index ? (
                <div style={dropdownStyle}>
                  {link.dropdown(index, buttonStyle)}
                </div>
              ) : null}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className='header'>
      <div className='header-content'>
        <img className='logo-image' src={UdemyLogo} alt='' />

        <nav>
          <div className='category'>
            <span className='category-context'>Categories</span>
          </div>
        </nav>
        <SearchInput onSubmit={() => {}} />

        {/* {renderRightNavItems()} */}
        <div>
          <div
            className='teach-on-udemy'
            onMouseEnter={() => toggleDropDown(1)}
            onMouseLeave={() => toggleDropDown(null)}
          >
            <a
              href='#'
              target='_blank'
              rel='noopener'
              className='teach-on-udemy-anchor'
            >
              <span className='teach-on-udemy-text'>Udemy Business</span>
            </a>
          </div>
          {true && (
            <div
              style={{
                position: 'absolute',
                right: '312px',
              }}
            >
              <TeachOnUdemyDropdown
                title1='Get your team access to over'
                title2='19000 top Udemy courses,'
                title3='anytime, anywhere.'
                buttonTitle='Try Udemy Business'
                buttonStyle={{
                  color: '#fff',
                  backgroundColor: '#1c1d1f',
                  border: '0px',
                }}
              />
            </div>
          )}
        </div>

        {headerIcons.map((icon, index) => {
          // Declare dropdown style object outside of return statement
          const dropdownStyle: React.CSSProperties = {
            position: 'absolute',
            right: index === 0 ? '172px' : index === 1 ? '122px' : '72px',
          };

          return (
            <div key={index}>
              <div
                className='cart'
                onMouseEnter={() => toggleIconDropDown(index)}
                onMouseLeave={() => toggleIconDropDown(null)}
              >
                <a
                  href='#'
                  target='_blank'
                  rel='noopener'
                  className='cart-anchor'
                >
                  {<icon.linkIcon />}
                </a>
              </div>

              {dropDownIconVisible === index ? (
                <div style={dropdownStyle}>{<icon.iconDropdown />}</div>
              ) : null}
            </div>
          );
        })}

        <div className='header-user-avatar'>
          <div className='header-user'>WO</div>
        </div>
      </div>
    </div>
  );
};
