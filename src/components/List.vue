<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-row>
        <el-col :span="6">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="开始时间"
            @change="handle"
            clearable
            align="center"
          ></el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-date-picker v-model="value2" type="date" placeholder="结束时间" @change="handle" clearable></el-date-picker>
        </el-col>
      <!-- </el-row>
      <el-row> -->
        <el-col :span="6">1</el-col>
        <el-col :span="6">2</el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" width="150px"></el-table-column>
            <el-table-column prop="address" label="地址" width="150px"></el-table-column>
            <el-table-column prop="address" label="地址" width="150px"></el-table-column>
            <el-table-column prop="address" label="地址" width="150px"></el-table-column>
            <el-table-column prop="address" label="地址" width="150px"></el-table-column>
            <el-table-column prop="address" label="地址" width="150px"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: []
      },
      value1: '',
      value2: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handle() {
      console.log(this.value1)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .el-date-editor {
  margin: 0 3px;
  margin-top: -10px;
} */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  padding: 0;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  margin: 0 auto;
  text-align: center;
}
.el-row {
  margin: 10px 0;
}
.el-pagination {
  padding: 0;
  text-align: left;
}
</style>
