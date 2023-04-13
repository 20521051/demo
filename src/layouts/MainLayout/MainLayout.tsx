import React from 'react'
import styles from './mainLayout.module.scss'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
