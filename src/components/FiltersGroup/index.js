import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          className="list-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1 className="side-heading">Rating</h1>
      <ul className="list-container">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          className="list-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductsCategories = () => (
    <>
      <h1 className="side-heading">Category</h1>
      <ul className="list-container">{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="input-text"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductsCategories()}
      {renderRatingFilters()}
      <button
        className="clear-filters-button"
        type="button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
