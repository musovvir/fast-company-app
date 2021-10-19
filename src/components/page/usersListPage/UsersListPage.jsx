import React, { useEffect, useState } from "react"
import UsersTable from "../../ui/UsersTable"
import Pagination from "../../common/Pagination"
import PropTypes from "prop-types"
import { paginate } from "../../../utils/paginate"
import _ from "lodash"
import GroupList from "../../common/GroupList"
import api from "../../../api"
import SearchStatus from "../../ui/SearchStatus"

const UsersListPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProf, setSelectedProf] = useState()
  const [sortedBy, setSortedBy] = useState({ iter: "name", order: "asc" })

  const [users, setUsers] = useState()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId))

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
    console.log(id)
  }

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf, searchQuery])

  const handleProfessionSelect = (item) => {
    if (searchQuery !== "") setSearchQuery("")
    setSelectedProf(item)
  }

  const handleSearchQuery = ({ target }) => {
    setSelectedProf(undefined)
    setSearchQuery(target.value)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    setSortedBy(item)
  }

  const pageSize = 6

  const filteredUsers = searchQuery
    ? users.filter(
        (user) =>
          user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : selectedProf
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      )
    : users

  if (!users) {
    return "...loading"
  }

  const sortedUsers = _.orderBy(
    filteredUsers,
    [sortedBy.path],
    [sortedBy.order]
  )

  const count = sortedUsers.length
  const allUsers = paginate(sortedUsers, currentPage, pageSize)

  const clearFilter = () => setSelectedProf()

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
            clearFilter={clearFilter}
          />
        </div>
      )}

      <div className="d-flex flex-column">
        <SearchStatus usersCount={count} />
        <input
          type="text"
          name="searchQuery"
          placeholder="Search..."
          onChange={handleSearchQuery}
          value={searchQuery}
        />
        {count > 0 && (
          <UsersTable
            users={allUsers}
            onSort={handleSort}
            selectedSort={sortedBy}
            onDelete={handleDelete}
            onToggleBookMark={handleToggleBookMark}
          />
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

UsersListPage.propTypes = {
  users: PropTypes.array
}

export default UsersListPage
