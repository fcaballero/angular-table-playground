export default function ($attrs) {
  this.sortType = $attrs.sortType;
  this.sortReverse = !!$attrs.sortReverse;

  this.sortTableByType = function (type) {
    this.sortType = type;
    this.sortReverse = !this.sortReverse;
  };

  this.isSortType = function (type) {
    return this.sortType === type;
  };
}