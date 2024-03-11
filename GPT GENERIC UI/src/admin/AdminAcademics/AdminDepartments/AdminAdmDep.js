import React, { useState } from 'react'
import { UserPlus } from 'phosphor-react'
import AdmDepDetails from './AdmDepDetails'

function AdminAdmDep() {
  const [staff, setStaff] = useState([])

  const addStaff = () => {
    let addItem = [...staff, Math.random()]
    setStaff(addItem)
  }

  const delStaff = (del) => {
    let delItem = staff.filter((i) => {
      // console.log('item to delete', del)
      return i !== del
    })
    setStaff(delItem)
    // console.log("item to delete", del);
  }

  return (
    <>
      {staff.map((d) => {
        return <AdmDepDetails key={d} value={d} delStaff={delStaff} />
      })}

      <center>
        <UserPlus size={28} weight="fill" color="blue" onClick={addStaff} />
      </center>
    </>
  )
}

export default AdminAdmDep
