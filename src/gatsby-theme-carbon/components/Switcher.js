import React, {
    useContext,
    useRef,
    useLayoutEffect,
    useEffect,
    useState,
  } from 'react';
  import cx from 'classnames';
  import useMedia from 'use-media';
  import { Locked16 } from '@carbon/icons-react';
  import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
  import { nav, open, divider, link, linkDisabled } from 'gatsby-theme-carbon/src/components/Switcher/Switcher.module.scss';
  
  const Switcher = ({ children }) => {
    const lgBreakpoint = useMedia('min-width: 1056px');
    const { switcherIsOpen, toggleNavState } = useContext(NavContext);
    const listRef = useRef(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      const collapseOpenNavs = function (e) {
        if (e.which === 27) {
          toggleNavState('switcherIsOpen', 'close');
        }
      };
  
      document.addEventListener('keyup', collapseOpenNavs);
  
      return function cleanup() {
        document.removeEventListener('keyup', collapseOpenNavs);
      };
    }, [toggleNavState]);
  
    // calculate and update height
    useLayoutEffect(() => {
      if (switcherIsOpen) {
        setHeight(listRef.current.offsetHeight + 40);
      } else {
        setHeight(0);
      }
    }, [listRef, switcherIsOpen]);
  
    const maxHeight = !lgBreakpoint && switcherIsOpen ? '100%' : `${height}px`;
  
    return (
      <nav
        className={cx(nav, { [open]: switcherIsOpen })}
        aria-label="Texas Travel Resources"
        tabIndex="-1"
        style={{ maxHeight }}>
        <ul ref={listRef}>{children}</ul>
      </nav>
    );
  };
  
  export const SwitcherDivider = (props) => (
    <li className={divider}>
      <span {...props} />
    </li>
  );
  
  export const SwitcherLink = ({
    disabled,
    children,
    isInternal,
    href: hrefProp,
    ...rest
  }) => {
    const href = disabled || !hrefProp ? undefined : hrefProp;
    const className = disabled ? linkDisabled : link;
    const { switcherIsOpen } = useContext(NavContext);
    const openTabIndex = disabled ? '-1' : 0;
  
    return (
      <li>
        <a
          aria-disabled={disabled}
          role="button"
          tabIndex={switcherIsOpen ? openTabIndex : '-1'}
          className={className}
          href={href}
          {...rest}>
          {children}
          {isInternal && <Locked16 />}
        </a>
      </li>
    );
  };
  
  // https://css-tricks.com/using-css-transitions-auto-dimensions/
  // Note: if you change this, update the max-height in the switcher stylesheet
  const DefaultChildren = () => (
    <>
      <SwitcherDivider>Texas Highways Magazine</SwitcherDivider>
      <SwitcherLink href="https://texashighways.com">
        Website
      </SwitcherLink>
      <SwitcherLink href="https://texashighways.com/the-magazine/">
        Latest Issue
      </SwitcherLink>
      <SwitcherLink href="https://ssl.drgnetwork.com/ecom/thm/app/live/subscriptions?org=THM&publ=TH&key_code=JXTSTGR&type=S&gift_key=J5FXGFT">
        Subscribe
      </SwitcherLink>
      <SwitcherLink href="https://texashighways.com/newsletter/">
        Newsletters
      </SwitcherLink>
      <SwitcherLink href="https://shop.texashighways.com/">
        Mercantile
      </SwitcherLink>
      <SwitcherDivider>Travel Resources</SwitcherDivider>
      <SwitcherLink href="https://drivetexas.org/">
        Traffic and Road Conditions
      </SwitcherLink>
      <SwitcherLink href="https://www.txdot.gov/inside-txdot/division/travel/information-centers.html">
          Travel Information Centers
      </SwitcherLink>
      <SwitcherLink href="https://www.txdot.gov/inside-txdot/forms-publications/publications/travel.html">
          Free Travel Literature
      </SwitcherLink>
      <SwitcherLink href="https://texashighways.com/texas-highways-events-calendar/">
          Events Calendar
      </SwitcherLink>
      <SwitcherLink href="https://www.traveltexas.com/">
          Travel Texas
      </SwitcherLink>
      <SwitcherLink href="https://www.arts.texas.gov">
          Texas Commission on the Arts
      </SwitcherLink>
      <SwitcherLink href="https://www.thc.texas.gov/">
          Texas Historical Commission
      </SwitcherLink>
      <SwitcherLink href="https://tpwd.texas.gov/">
          Texas Parks &amp; Wildlife
      </SwitcherLink>
      <SwitcherDivider>Texas Department of Transportation</SwitcherDivider>
      <SwitcherLink href="http://dontmesswithtexas.org/">
        Don&rsquo;t mess with Texas &reg;
      </SwitcherLink>
      <SwitcherLink href="https://drivecleantexas.org/">
          Drive Clean Texas
      </SwitcherLink>
      <SwitcherLink href="https://www.txdot.gov/inside-txdot/get-involved/volunteer/adopt-a-highway.html">
          Adopt-a-Highway
      </SwitcherLink>
      <SwitcherLink href="http://ktb.org/">
          Keep Texas Beautiful
      </SwitcherLink>
    </>
  );
  
  Switcher.defaultProps = {
    children: <DefaultChildren />,
  };
  
  export default Switcher;
  