import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type PartnerProps = {
  partners: Array<PartnerType>;
};

const PartnerTable: React.FC<PartnerProps> = ({ partners }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overflow}>
        <div className={styles.width}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th scope="col" className={styles.th}>
                    id
                  </th>
                  <th scope="col" className={styles.th}>
                    name
                  </th>
                </tr>
              </thead>
              <tbody>
                {partners.map(partner => (
                  <tr key={partner.id}>
                    <td className={styles.td}>{partner.id}</td>
                    <td className={classNames(styles.td, styles.name)}>{partner.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerTable;
