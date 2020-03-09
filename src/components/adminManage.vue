<template>
  <el-container>
    <el-header><img src="../assets/img/logo.png" alt=""></el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#b6d0ec" active-text-color="#ffd04b">
          <el-menu-item index="1">
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">音乐管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">评论管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="Date" prop="date">
          </el-table-column>
          <el-table-column label="Name" prop="name">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog title="修改" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-input autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <el-pagination middle layout="prev, pager, next" :total="50" align="right">
        </el-pagination>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
export default {

  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: '',
      dialogFormVisible: false,
      form: {},
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleEdit(index, row) {
      this.dialogFormVisible = true
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #528ad4;
}

.el-header img {
  width: 64px;
}

.el-aside {
  background-color: #b6d0ec;
  text-align: center;
}
.el-menu {
  border: none;
}
</style>
