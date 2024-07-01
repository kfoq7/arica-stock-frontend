import dynamic from 'next/dynamic'

export const Select = dynamic(() => import('react-select'), { ssr: false })
