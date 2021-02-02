import React, { useState } from 'react';
import { useWindowScroll } from 'beautiful-react-hooks';
import cx from 'classnames';
import BackToTopBtn from 'gatsby-theme-carbon/src/components/BackToTopBtn';

import styles from 'gatsby-theme-carbon/src/components/Utils/Utils.module.scss';

const TgUtils = () => {
  const [hidden, setHidden] = useState(true);
  const onScroll = useWindowScroll();

  onScroll(() => {
    if (hidden && window.scrollY > 300) {
      setHidden(false);
    }
    if (!hidden && window.scrollY < 300) {
      setHidden(true);
    }
  });

  return (
    <div
      aria-label="This section contains utilities"
      className={cx(styles.container, { [styles.hidden]: hidden })}>
      <BackToTopBtn />
    </div>
  );
};

export default TgUtils;
