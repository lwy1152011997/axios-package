// 对于知识登录的ajax请求,它的请求方式只能是POST请求,是写死了的,请求的地址不会变,我们可以把固定不变的写死
// 然后只向函数内部传会变的参数,因为用户名和密码会变,所以发送请求的ajax函数可以按照以下方式写死固定的值
import ajax from './ajax';

export const reqAjax = (username, password) => ajax('/login', {username, password}, 'POST');

// 请求验证用户信息
export const reqValidateUserInfo = (id) => ajax('/validate/user', {id}, 'POST');

// 获取一级或者二级分类列表
export const reqCategories = (parentId) => ajax('/manage/category/list', {parentId});

// 获取添加品类
export const reqCategory = (parentId, categoryName) => ajax('/manage/category/add', {parentId, categoryName}, 'POST');

// 发送请求修改品类名称
export const changeCategoryName = (categoryId, categoryName) => ajax('/manage/category/update', {categoryId, categoryName}, 'POST');

// 请求分页码对应的商品数据
export const reqProducts = (pageNum, pageSize) => ajax('/manage/product/list', {pageNum, pageSize});

// 请求添加产品
// 一般在请求的时候,只有对数据进行查询操作的的时候是用到GET, 对数据的改,增,删,都是用到POST
export const reqAddProduct = ({name, desc, price, categoryId, pCategoryId, detail}) => ajax('/manage/product/add', {name, desc, price, categoryId, pCategoryId, detail}, 'POST');

// 修改产品的请求
export const reqUpdateProduct = ({name, desc, price, categoryId, pCategoryId, detail, _id}) => ajax('/manage/product/update', {name, desc, price, categoryId, pCategoryId, detail, _id}, 'POST');

// 获取角色列表的请求
export const reqGetRoles = () => ajax('/manage/role/list');

// 创建角色的请求
export const reqAddRole = (name) => ajax('/manage/role/add', {name}, 'POST');

// 请求角色的设置权限
export const reqUpdateRole = (_id, auth_name, menus) => ajax('/manage/role/update', {_id, auth_name, menus : JSON.stringify(menus)}, 'POST');

// 获取用户信息列表的请求
export const reqCreatUser = () => ajax('/manage/user/list');

// 创建角色的请求
export const reqCreatUsers = ({username, password, phone, email, role_id}) => ajax('/manage/user/add', {username, password, phone, email, role_id}, 'POST');
