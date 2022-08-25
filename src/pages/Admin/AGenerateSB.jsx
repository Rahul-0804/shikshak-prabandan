import React from 'react'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'
import AdminGenerateSB from '../../components/Admin/AdminGenerateSB/AdminGenerateSB'


function AGenerateSB() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <AdminGenerateSB/>
    </>
  )
}

export default AGenerateSB