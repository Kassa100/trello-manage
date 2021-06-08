# manage-trello

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev


```

### 创建数据库

```
npm run db:create

```

### 删除数据库

```
npm run db:drop
```

### 创建迁移脚本文件

```
./node_modules/.bin/sequelize migration:create --name UserInit(迁移脚本文件名称)

```

### 执行迁移脚本文件

```
npm run db:migrate

```

### 撤销/回滚 迁移脚本

```
 单次撤销 npm run db:migrate:undo
 撤销所有 npm run db:migrate:undo:all
```

### 更新迭代 迁移脚本

```
 1 ./node_modules/.bin/sequelize migration:create --name 迭代脚本名称(尽量语义化)
 2 npm run db:migrate
```

### 创建种子脚本

./node_modules/.bin/sequelize seed:create --name UserInit(种子脚本名称--语义化)

### 执行种子脚本

```
npm run db:seed:all
```

### 撤销/回滚 种子脚本

```
npm run db:seed:undo:all
```

### 初始化数据库脚本命令

```
npm run db:init （创建数据库->执行迁移->执行种子）

```

### 重构数据库脚本命令

```
npm run db:redo
```
