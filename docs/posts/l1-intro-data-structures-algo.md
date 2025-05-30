---
title: "L1: Introduction to Data Structures & Complexity"
date: 2025-05-10
version: "V3"
---

# L1：Introduction of Data structure and Complexity_Data Structures And Algorithms



## 1. Data Structures 

> "Clever" ways to organize information in order to enable efficient computation

But:

Why do we need Data Structures?

What do we mean by clever?

What do we mean by efficient?

与人日常接触到的数据量相比，计算机需要处理大批量的问题，如果不使用Data Structures，就是一团乱麻。

举个例子：
我只有2双鞋，每次出门随便挑一双就可以了，10秒钟都花不到；

但是我知道有些人有100双鞋，如果Ta还有家人的话，可能就有几百双鞋，如果把鞋子随便一扔，不分类、索引的话，要找到特定的那一双，是非常难的。相反，我们把鞋子分类、建立索引，想找到特定的那一双就非常容易。



例如，我们把鞋子按家人（u_id）分类（爸爸的、妈妈的、孩子的）

按颜色分类、按功能分类（运动鞋、皮鞋、凉鞋）

按鞋盒编号（或者按鞋柜的位置）存放

| **数据结构**         | **类比**                 | **用来干嘛**             |
| -------------------- | ------------------------ | ------------------------ |
| 数组（Array）        | 把鞋子排成一排           | 快速按位置找             |
| 哈希表（Hash Table） | 鞋盒上贴编号标签         | 快速按名字找             |
| 栈（Stack）          | 鞋子一层一层叠放         | 最后放的先拿走           |
| 队列（Queue）        | 排队试鞋子               | 先来先试，公平有序       |
| 树（Tree）           | 鞋子放成分层的鞋柜       | 按分类、子分类查找       |
| 图（Graph）          | 鞋子搭配衣服、场合的网络 | 多维度连接，复杂关系建模 |



## 2. 抽象——抽象为什么重要，不抽象不行吗？

抽象是从众多事物中提取出共同的、本质性的特征，而舍弃其非本质特征的过程。

> 一只小鸟+一只小鸟=两只小鸟。
>
> 1 + 1 = 2
>
> 两只小鸟的2，和2颗糖的2，本质是一样的。

把**不同事物**（小鸟、糖果、苹果……）都"提炼"成同一个"数量"概念（1、2、3……），忽略它们各自的形状、颜色、材质等细节，只关心"有几个"。

不抽象不行吗？

> 虽然抽象并非没有缺点（例如，糟糕的抽象可能包含过多不重要细节或遗漏重要细节，某些抽象可能影响性能；过于抽象的概念也可能难以理解和形象化，但在许多情况下，不进行抽象是不可行的，或者至少会极大地限制我们的能力：

- **无法深入理解事物**：如果缺乏抽象，我们将停留在对事物表面现象的感知，无法理解其内在的本质和规律。
- **难以应对复杂性**：面对复杂系统或问题时，如果不进行抽象来简化和分层，我们将很快被海量的细节所淹没，无法有效思考和行动。
- **软件开发将变得混乱且难以维护**：如果代码中策略和细节混杂在一起，缺乏清晰的抽象层，那么代码将难以理解、修改和测试。微小的改动都可能引发连锁反应，导致系统脆弱不堪。
- **科学发展受阻**：数学和许多科学领域的发展都依赖于抽象。没有抽象，就无法从具体问题中提炼出普适性的理论和方法，也就无法推动知识的进步。例如，没有数字这个抽象概念，牧羊人只能用石头与羊一一对应来计数，效率低下且难以进行更复杂的运算。

**总结来说**，抽象是人类认知和文明发展的基础之一。它通过简化复杂性、揭示本质、提高效率和促进知识的通用性，使我们能够更有效地理解和改造世界。虽然在具体应用中需要权衡利弊，并设计出"好的"抽象，但完全摒弃抽象，将使我们在面对复杂问题时寸步难行。



### 2.1抽象的现实应用——经典问题：穷人怎么变成富人？

我知道其实90%的人没有仔细思考过这个问题，下面我们一起把"穷人如何变成富人"这个经典问题，抽象成一个经济学模型——**未来现金流折现（NPV, Net Present Value）**，并说明其本质与适用场景。

需要说明：真实世界非常复杂，每个人面临的情况也不一样，请自己承担决策代价，谨慎行动。

------

#### S1 从现实到抽象：建模思路

**识别核心目标**：让个人成为"富人"——即**累计资产现值（财富）**达到某个阈值。

1. **抽象关键变量**

   - **客单价（A）**：每次交易的平均收入。
   - **净利润率（m）**：扣除成本、税费后的收益占收入比例。
   - **复购次数（f）**：单位时间内客户重复购买平均次数。
   - **时间区间（t=0…T）**：模型覆盖的时长，比如 T 年。
   - **贴现率（r）**：反映货币的时间价值和风险偏好。
   - **我们假设：**客单价、复购次数、利润率不变、不考虑业务增长性问题、不考虑通胀、假设业务可以永续、忽略细节。

2. **形成数学公式**
   $$
   \text{年现金流(CF)} \;=\; A \times m \times f
   $$

   $$
   \text{资产现值（NPV）}
   \;=\;
   \sum_{t=1}^{T} \frac{A \, m \, f}{(1 + r)^{t}}
   \;+\;
   \frac{\text{残值}}{(1 + r)^{T}}
   $$

------

#### S2. 公式解读

- **年现金流（CF）**
  $$
  \mathrm{CF} \;=\; A \times m \times f
  $$

- **贴现过程**

  - 第 \(t\) 年的现金流折算到现值：
    $$
    \frac{\mathrm{CF}}{(1 + r)^{t}}
    $$

  - 忽略残值后，总和即为个人"赚的钱"的现值：
    $$
    \mathrm{NPV} \;=\; \sum_{t=1}^{T} \frac{\mathrm{CF}}{(1 + r)^{t}}
    $$

------

#### S3. 常见场景简析

1. 河北的外卖骑手张三：
   - 客单价=1.5-4元，利润率极低（考虑到当地最低工资，甚至可能是负值），每天复购30次。很显然不是一个好的商业模式。
   - 类似的还有大部分的老师、健身教练、快递员、保安、保洁、农村大集上卖自家蔬菜的大爷大妈。
2. **订阅制互联网服务**
   - ## 如视频网站／SaaS：客单价（订阅费）× 净利率（边际成本低）× 月度留存率（高复购）
3. **房地产租赁**
   - **租金收入** 相当于年现金流，几乎不用"复购"，但贴现率较低（风险小），且通常伴随房产升值。
4. **资产管理／投资**
   - 把"客单价"替换成"每笔投资收益"，复购次数对应"投资频次"，贴现率反映市场回报率。

---

#### S4. 穷人怎么变成富人？（极简的情况下）

1. 提高客单价（例如可以去北上广卖房子，当律师，贷款中介，股票经纪人，重组上市公司）。
2. 提高利润率、复购率（例如可以当租房中介，股票经纪人，POS机销售中介，出柜的日本AV女优们的妈咪）。
3. 总的来讲，可以找一些启动成本低，利润率高，复购多的生意做一做，把CF拉起来。重点在于抽象思考，付出行动。

**S5. 挖个商业模式的坑。**

如果你想听我分析的教主当年在中国资本市场叱咤风云时候的商业模式，可以留言。我可以尝试一下哈哈。

商业模式当然是一种非常重要的抽象，可以帮助我们了解价值是如何被创造的，又是如何传递的。

------

##### 在这个例子中，为什么抽象有价值？

- **统一度量**：不同领域、不同模式的赚钱方式，都能归结到"未来现金流折现"这个通用框架。
- **可量化评估**：通过调整 $A,m,f,r$ 等参数，定量比较不同路径的"致富效率"。
- **辅助决策**：明确要提升哪个维度（提价、降本、提升复购或降低风险／贴现率），才能最快积累财富。





### 2.2 抽象与等价——解决一类问题（以快速排序为例）

举例：给河南100万名考生的考试成绩排名，现在经过数学证明，我们能知道使用一种叫做'快速排序（Quick Sort）'的算法，复杂度是100万*log100万，我们后面会讲到；

而人们直觉能想到的算法：

一个一个排序，即：

第一个数来了，排第一；

第二个数字来了，跟第一个数字比较，如果大就排第一，否则排第二；

第三个数字来了，跟第一、第二比较，插入到相应位置；

以此类推。

这种算法叫做**插入排序（Insertion Sort）**，虽然能解决问题，但复杂度是O（n^2）

直观比较一下：

| **项目**     | **插入排序（Insertion Sort）**       | **快速排序（Quick Sort）**                           |
| ------------ | ------------------------------------ | ---------------------------------------------------- |
| 数学表达式   | 100万 × 100万 = 1,000,000,000,000 次 | 100万 × log₂(100万) ≈ 1,000,000 × 20 ≈ 20,000,000 次 |
| 中文表达     | 一兆次比较                           | 两千万次比较                                         |
| 数量级       | **万亿级（1兆）**                    | **千万级**                                           |
| 相差多少倍？ | 快速排序比插入排序快约 **50,000 倍** | —                                                    |

也就是说，解决同一个问题，**假如快速排序需要10s，插入排序需要10*50000=500000s 约139小时。**

上面的[快速排序算法，是科学家 Tony Hoare 在1959年提出的](https://en.wikipedia.org/wiki/Quicksort)，它是通用排序中最常用、也是平均性能最优的算法之一。

计算机科学中，到处都需要排序，这是计算机科学中最基本、最核心的操作之一，许多排序问题，从解决方法上，是等价的，都都可以通过快速排序（Quicksort）解决。





## 3. ADT (Abstract Data Type，抽象数据类型)

---

### 3.1 什么是ADT？

> 是一种理论上的概念，它侧重于**定义数据类型是什么以及能对它进行什么操作**，而**不关心这些操作是如何具体实现的**。

| **数据 (Data)**                    | property (属性、名字、数据类型）               | 就像你的玩具箱子，里面装的是**什么东西**。比如，你的玩具箱里装的是积木、汽车、还是娃娃。ADT 关心的是它要处理的是哪一类"东西"。 |
| ---------------------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **操作 (Operations)**              | methods（干啥，增删改查）                      | 就是你对这些"东西"**能做什么**。比如，对玩具箱里的积木，你可以"放一块新的进去"、"拿一块出来"、"数数有几块"、"把它们搭成城堡"。 |
| **行为/规则 (Behavior/Semantics)** | 先进先出 (FIFO)，后进先出 (LIFO) 什么之类的... | 就是这些"东西"和"操作"要遵守的**游戏规则**。比如，玩叠积木游戏（像"栈"），规定了"后放上去的积木要先拿下来" (LIFO)；或者排队打饭（像"队列"），规定了"先来排队的人先打到饭" (FIFO)。这些规则让一切都井井有条。 |

### 3.2 ADT举例：

| ADT 组件 (Component)               | "鞋子大管家" ADT (Shoe Organizer ADT)                        | "考试成绩排行榜" ADT (Exam Candidate Ranker ADT)             |
| :--------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **数据 (Data)**                    | - **每一双鞋子的信息：**<br>  &nbsp;&nbsp;- 主人 (爸爸、妈妈、孩子)<br>  &nbsp;&nbsp;- 颜色<br>  &nbsp;&nbsp;- 类型 (运动鞋、皮鞋、凉鞋)<br>  &nbsp;&nbsp;- 存放位置 (鞋盒编号或鞋柜位置)<br>- **其他可能信息：**<br>  &nbsp;&nbsp;- 尺码<br>  &nbsp;&nbsp;- 购买日期等 | - **每一位考生的信息：**<br>  &nbsp;&nbsp;- 唯一考生ID (考号)<br>  &nbsp;&nbsp;- 考试分数<br>- **其他可能信息：**<br>  &nbsp;&nbsp;- 姓名<br>  &nbsp;&nbsp;- 科目等 |
| **操作 (Operations)**              | - `添加鞋子(鞋子信息)`: 把一双新鞋子登记并放到合适的位置。<br>- `查找鞋子(查询条件)`: 根据主人、颜色、类型等条件找到鞋子。<br>- `取出鞋子(鞋子标识)`: 记录某双鞋被取出。<br>- `盘点鞋子()`: 查看所有鞋子或按条件统计数量。<br>- `整理鞋柜()`: (比如按某种规则重新摆放) | - `登记考生(考生ID)`: 添加一个新考生到系统中。<br>- `录入/更新分数(考生ID, 分数)`: 为指定考生记录或修改分数。<br>- `查询排名(考生ID)`: 获取指定考生的当前排名。<br>- `查询分数(考生ID)`: 获取指定考生的分数。<br>- `获取排行榜(名次数N)`: 列出成绩排名前N的考生列表。<br>- `统计总人数()`: 获取当前已登记的考生总数。 |
| **行为/规则 (Behavior/Semantics)** | - **唯一性**: 每双鞋子在鞋柜中的描述或位置应该是可区分的。<br>- **容量限制**: 鞋柜可能有最大容量，满了就不能再添加新鞋。<br>- **查找结果**: 查找不存在的鞋子会明确告知"未找到"。<br>- **状态一致性**: 取出鞋子后，该鞋子的状态（如"在柜内"或"被穿着"）会更新。 | - **排序规则**: 考生主要按分数从高到低排序；分数相同时，可能有次要排序规则 (如按考号)。<br>- **有效性**: 分数必须在有效范围内 (例如0-750分)。<br>- **唯一ID**: 每个考生ID是唯一的。<br>- **查询结果**: 查询不存在的考生ID会明确告知"查无此人"。<br>- **动态更新**: 录入或更新分数后，排行榜名次会相应（并快速）更新以反映最新情况。 |

### 3.3 家里的宠物狗，能不能抽象成一个数据结构？

我家有条狗，叫黑子，我可以把黑子抽象成一个Dog ADT

#### 数据(Data)

- **基本属性**：名字(小黑)、出生日期、品种(腊肠和啥狗的串儿)、年龄2岁、体重8kg、性别男
- **状态属性**：健康状况、饥饿度、精力值、心情状态
- **行为特征**：警戒阈值、社交性程度、服从度

#### 操作(Operations)

- `eat(food_type, amount)`: 进食特定类型和数量的食物，影响饥饿度和健康状况
- `drink(amount)`: 饮水，影响水分状态
- `bark(intensity)`: 发出不同强度的叫声
- `sleep(duration)`: 睡眠指定时长，恢复精力值
- `play(activity, duration)`: 参与特定活动，影响精力和心情
- `eliminate(type)`: 排泄功能(尿尿/拉屎)，受时间和上次进食后的时间影响
- `respondTo(stimulus)`: 对外部刺激(如陌生人、其他动物)的反应

#### 行为规则(Behavior/Semantics)

- **排泄规律**：出门后5分钟内会在固定区域排尿；排便没有固定位置，但通常在进食后1-2小时
- **警戒行为**：当陌生人进入领地(家)，且其警戒阈值被超过时，触发`bark(high)`
- **状态转换**：饥饿度超过阈值，心情状态变为"烦躁"；精力低于阈值，触发`sleep()`操作
- **操作约束**：`play()`操作在精力值过低时无法执行；`eat()`在饱食度高时执行效率降低

#### 将宠物抽象为ADT的实际价值

1. **认知价值**：训练抽象思维，帮助我们系统化理解复杂实体(如宠物)的属性和行为模式
2. **应用价值**：
   - 可用于开发宠物健康追踪应用或虚拟宠物游戏
   - 为智能家居系统开发宠物行为响应功能(如感应到狗在门口,自动开门)
   - 建立宠物训练计划，通过理解操作与行为规则间的关系
3. **沟通价值**：与兽医、训犬师或其他家庭成员更清晰地描述和沟通宠物的状态和行为
4. **预测价值**：基于已知的行为规则和当前状态，预测宠物可能的反应(如预测何时需要出门排泄)

这种抽象不仅是理论练习，也可以帮助我们更系统地理解和管理与宠物的互动，甚至可能启发设计更好的宠物相关产品或服务。

------

### 3.4 DT和ADT区别是啥？

| 层次                                        | 关键词               | 关注点                                             | 例子                                                      |
| ------------------------------------------- | -------------------- | -------------------------------------------------- | --------------------------------------------------------- |
| **数据类型（DT, Data Type）**               | "语言里能声明的类型" | *值域* + *基本操作*，往往已绑定具体存储方式        | `int`、`float`、`char[10]`、Java `String`                 |
| **抽象数据类型（ADT, Abstract Data Type）** | "只描述**行为契约**" | 只规定 *能做什么* 和 *结果如何*，完全不谈 *怎么做* | Stack、Queue、Priority Queue、Dictionary（Map）、Sequence |
| **数据结构（Data Structure）**              | "落到内存的实现"     | 具体的 *组织方式*、*算法*、*时间/空间特性*         | 动态数组、链表、哈希表、红黑树、堆（Heap）、邻接表图      |

1  一句话区分

| 概念                          | 关键词                                      | 提问时常见混淆点  |
| ----------------------------- | ------------------------------------------- | ----------------- |
| **ADT（Abstract Data Type）** | *"做什么"*：操作集合 + 语义契约（不谈存储） | 像"接口 / 协议"   |
| **Data Structure**            | *"怎么做"*：具体存储布局 + 算法细节         | 像"具体类 / 字段" |



> **蓝图 vs. 房子**
>  ADT 是蓝图——告诉你这栋楼应有几扇门、几部电梯；
>  数据结构是已建好的房子——钢筋在哪、管线怎么走。



## 4 为什么我们有这么多的 Data Structures



因为这个世界非常复杂， 需要我们解决的问题实在是太多了，我们需要找到快速、优雅、高效率的解决办法。

但是资源是有限的，我们面临**权衡 (trade-offs)**：多就不可能快，好就不可能省。



| 约束 / 优化目标                                | 常见冲突                  | 典型结构选择 & 原因                                          |
| ---------------------------------------------- | ------------------------- | ------------------------------------------------------------ |
| **操作模式**（读多写少？随机访问？顺序扫描？） | 随机读 ↘ 顺序写           | - *动态数组*：O(1) 随机访问，读多写少- *链表/跳表*：插入删除 O(1)/O(log n)，顺序遍历友好 |
| **有序 vs 无序**                               | 需要范围查询 / 排序       | - *平衡树 (AVL, 红黑树, B-Tree)*：保持排序，支持 `[L,R]` 范围查询 O(log n + k)- *哈希表*：牺牲顺序，换 O(1) 平均查询 |
| **最坏情况保证**                               | 实时系统拒绝退化          | - *红黑树* 最坏 O(log n)- "随机化哈希表 + rehash"只保证期望 O(1) |
| **内存占用**                                   | 内存紧张 ↔ 低延迟         | - *紧凑 trie*、*位图*：压缩存储- *数组堆*：高局部性、常数小  |
| **CPU 缓存/局部性**                            | 避免指针跳                | - *数组 / 连续块*：线性扫描快- *树状数组 Fenwick*：用数组模拟树 |
| **磁盘 / SSD**（外存）                         | 随机 IO 成本高            | - *B-Tree / LSM-Tree*：按"页"批量读写- *外部归并排序*：顺序扫描磁盘 |
| **并发**                                       | 读写锁冲突                | - *分段锁哈希表*、*无锁队列 (MPSC)*：减少锁粒度或无锁- *CRDT*：最终一致、可离线合并 |
| **概率 & 近似**                                | 允许少量误差换速度/空间   | - *Bloom Filter*：判断"可能存在" O(1)、空间远小于集合- *Count-Min Sketch*：流量计数近似 |
| **特殊数据/查询**                              | 字符串前缀、几何、图路由… | - *Trie / DAWG*：前缀检索 O(词长)- *KD-Tree / R-Tree*：多维空间范围查询- *Dijkstra PQ = 二叉 vs 斐波那契堆*：权衡 `decrease-key` 频率 |
| **可持久化 / 版本管理**                        | 需要历史快照              | - *不可变（Persistent）红黑树、Segment Tree*：结构共享，增量 O(log n) |
| **实现复杂度**                                 | 算法常数 ↔ 开发维护       | - *简单链表*：容易写、调试- *斐波那契堆*：理论快但常数大 → 很少用在工程 |





## 5. 算法、算法分析、Big-O 分析、Time and Space Complexity 

#### 5.1 算法基本定义

算法是一组 **有限、明确、可执行** 的步骤，用来解决特定问题或完成某个任务。

算法的本质是：**思路/方法** —— 描述"怎么做"；并不依赖某种编程语言。

简单讲，算法就是解决问题的配方。

类似菜谱，你只要按步骤做，就能做出来饭菜。



#### 5.2 算法分析的内容是什么？

主要是：Time and Space Complexity

Time Complexity ： 时间复杂度。

例如上面我们给100万河南高考生排序，插入排序的耗时，是快速排序的50000倍。

Space Complexity ：空间复杂度——算法在运行期间额外占用多少内存？

简单讲就是：这份配方好不好？快不快？浪费资源吗？出错严重吗？



#### 5.3 加餐，算法之神——高德纳

清华大学史元春教授讲，计算机思维的本质是翻译，把人想做的事情，翻译给计算机能听懂的程序语言。

通过抽象，人们发现，这些计算机能搞定的事情里面，有许多有共性，于是，科学家们就提炼出来一些高效的，时间复杂度、空间复杂度都很低的、不断被理论和实践检验过OK的标准流程，就是算法。

算法构成了计算机科学的基础。

人和人的差别，是数量级的，同样解决100万河南考生排序的问题，张三用快速排序、李四用插入排序，代码长度基本一样，但消耗的计算资源差距上万倍。

世界上最早将复杂度严格量化的是计算机科学家、算法分析之父、图灵奖得主，高德纳。

高德纳有多牛逼呢？

他1968开始写巨著《*The Art of Computer Programming*》的时候，苦于没有好的编辑软件，就写了一个TeX软件，它彻底改变了技术文档和学术出版领域：

> TeX的历史意义难以低估：
>
> - **行业革命**：DEC工程副总裁C. Gordon Bell称TeX为"本世纪排版领域潜在的最重要发明"，并认为其重要性"可能与古腾堡印刷机的引入相当"[2](https://www.historyofinformation.com/detail.php?id=3339)。
> - **出版流程变革**：TeX建立了文本输入与排版之间的直接联系，使得"期刊和图书出版行业可能发生剧烈重组，让作者在出版过程中扮演更重要角色"[2](https://www.historyofinformation.com/detail.php?id=3339)。
> - **学术界广泛采用**：TeX在技术论文作者中迅速流行，成为越来越多用户的"通用语言"[4](https://walden-family.com/ieee/dtp-tex-part-1.pdf)。特别是在1978年，美国数学学会（AMS）强烈支持采用TeX进行出版活动，大大加速了TeX的普及和接受[4](https://walden-family.com/ieee/dtp-tex-part-1.pdf)。
> - **长期稳定性**：克努特将TeX设计为长期稳定的系统（今天有效的东西在几十年后仍能正常工作），这一特性使其成为可靠的存档工具[4](https://walden-family.com/ieee/dtp-tex-part-1.pdf)。



高德纳的思想，主要包含三个部分：

> 1. 比较算法快慢，需要考虑数据量极大、近乎无穷大的情况。
>
>    - 就像高德纳说的："不要在意你的算法能多快处理10个元素，要关心它如何处理10亿个元素！"
>
> 2. 决定算法快慢的因素虽然可能很多，但是所有的因素都可以被分为两类。第一类是不随数据量变化的因素，第二类是随着数量变化的。
>
>    - 例A ，我们把运行时间写成数学式子：
>      $$
>      T(n)=n^2+3n+5 \approx n^2 \quad (\text{当 } n \to \infty)
>      $$
>
>      - 当 $n$ 增长， $3n+5$， 可以忽略不计，我们就可以**直接忽略**。
>      
>      -   $$
>          T(n) \approx n^2 \quad (\text{当 } n \to \infty) (\text{忽略常数与低阶项})
>          $$
>
>    - 例B ，我们把运行时间写成数学式子：
>      $$
>      T(n)=3n^3+42n^2+7n+2025 \approx 3n^3 \quad (\text{当 } n \to \infty)
>      $$
>
>      - 当 $n$ 增长， $42n^2+7n+2025$， 可以忽略不计，我们就可以**直接忽略**。
>
>      -   $$
>          T(n) \approx 3n^3 \quad (\text{当 } n \to \infty) (\text{忽略常数与低阶项})
>          $$
>
> 3. 如果两个算法，在数量级上相当，在CS中，我们就认为他们一样好。
>
>    - 例如，1粒芝麻和8粒芝麻一样好，不要在意这些细节。
>
>    - 有这个精力，去弄几个西瓜好不好？
>
>    - 在上述例B中
>
>    - $$
>      T(n) \approx 3n^3 \quad (\text{当 } n \to \infty) (\text{忽略常数与低阶项})
>      $$
>
>    - 引入Big-O的概念，常数 $3$ 和所有低阶项都会被"大 O"吃掉，只留下量级——
>      $$
>      T(n)=O\bigl(n^{3}\bigr).
>      $$
>





### 6. Big-O Analysis

#### 6.1 效率的本质——少做事情

   以给100万河南考生排序为例，说明效率的本质。
   我们上面给了两种排序算法，插入排序和快速排序：

   插入排序：
   ```java
   // 有100万河南考生，每个考生有一个分数，我们用一个数组来表示他们的分数
   // 用自然语言描述就是：
   // 1. 从第二个考生开始，依次将每个考生插入到前面已经排好序的考生中
   // 2. 插入的方式是：从后往前比较，如果前面的考生分数比当前考生分数大，则将前面的考生向后移动一位
   // 3. 直到找到一个位置，使得当前考生分数比前面的考生分数小，则将当前考生插入到该位置
   // 用代码描述就是：
   public void insertionSort(int[] arr) {
       for (int i = 1; i < arr.length; i++) {
           int key = arr[i];
           int j = i - 1;
           while (j >= 0 && arr[j] > key) {
               arr[j + 1] = arr[j];
               j--;
           }
           arr[j + 1] = key;
       }
   }
   ```
   快速排序：
   ```java
   // 用自然语言描述就是：
   // 1. 选择一个基准元素（枢值，Pivot Point，简称pi），将数组分成两部分，一部分比基准元素小，一部分比基准元素大
   // 2. 递归地对两部分进行排序 
   // 3. 重复上述过程，直到数组有序
   // 用代码描述就是：
   public void quickSort(int[] arr, int low, int high) {
       if (low < high) {
           int pi = partition(arr, low, high);
           quickSort(arr, low, pi - 1);
           quickSort(arr, pi + 1, high);
       }
   }
   ```
   在插入排序中，我们每次只比较相邻的元素，然后交换位置，直到找到一个位置，使得当前考生分数比前面的考生分数小，则将当前考生插入到该位置。之所以慢，是因为它做了太多次的本来不需要的比较。
   在快速排序中，我们选择一个基准元素，将数组分成两部分，一部分比基准元素小，一部分比基准元素大，然后递归地对两部分进行排序，直到数组有序。每次把数组分组就可以减少一半的元素，就能减少一半的比较次数。递归分组，直到数组有序，那么时间复杂度是$ n*log（n) $。

   我们的要达到的目的是一定的，例如都是给考生排序，那么哪个算法做的运算少，哪个算法就快，效率就高。
   又例如，我们要在账户中增加100万存款，那么哪个方法能让我们做的少，哪个效率就高。



#### 6.2 怎么衡量算法的好坏？ ——严肃理解大O
大O就是高德纳引用微积分中的大O符号，来表示算法的复杂度。
定义： 
> “大 O” 符号（Big-O notation）是算法分析中用来描述函数增长速度的常用表示，主要用于刻画算法在输入规模趋于无穷大时的上界行为。

##### 6.2.1 数学定义
1  直观出发——“把函数包在盒子里”
	•	把算法运行时间写成一个关于输入规模 n 的函数 T(n)。
	•	我们想问：当 n 变得很大时，T(n) 最多会涨多快？
	•	大 O 就像给 T(n) 套一个“不会超出”的盒子——盒子的形状由另一个更简单的函数 g(n) 决定，盒子的高度可以再放大若干倍（乘个常数），而且只要求在“足够大的 n”以后一直盖得住。

2  先看一个例子
令
$$
T(n)=3\,n^{3}+4\,n^{2}+100 .
$$

我们猜想：
$$
T(n)\ \text{不会比}\ 10\,n^{3}\ \text{长得更快。}
$$

验证方法——把两边真正比一比：
	1.	对所有 n\ge 1 都有
$$
4n^{2}\le 4n^{3},\qquad 100\le 100n^{3},
$$
因为 $ n^{3}\ge n^{2} $ 且 $ n^{3}\ge 1 $。
	2.	把它们加在一起：
$$
3n^{3}+4n^{2}+100
\;\le\; 3n^{3}+4n^{3}+100n^{3}
\;=\; 107\,n^{3}.
$$

	3.	取常数 C=107，就得到

$$
T(n)\le C\,n^{3}\quad(\forall n\ge 1).
$$

于是写成
$$
T(n)=O(n^{3}).
$$
3  正式定义

定义
给定两个从正整数映射到非负实数的函数 $ f(n) $ 与 $ g(n) $。
设 $ f(n)=O\bigl(g(n)\bigr) $，当且仅当
存在 常数 $ C>0 $ 和 阈值 $ n_{0}\ge 1 $，使得
$ 0\le f(n)\le C\,g(n)\quad\bigl(\forall\,n\ge n_{0}\bigr). $

逐词解释：
符号/单词
意义（高中读法）
$ f(n),g(n) $
两个非负函数；通常 f 是算法实际耗时，g 是我们用来做“盒子”的简单函数。
$ \exists C>0 $
“存在一个正的常数 C ”；它 不依赖于 n。只要找得到一个就行。
$ \exists n_{0} $
“存在一个起点 n_{0}”；从这里往后，盒子一直有效。
$ f(n)\le C\,g(n) $
对每个足够大的 n，f 的值不上穿盒子顶部。
“≤” 前的 0
只是强调我们关心的是非负耗时；不会出现负数。















Ignores “details”
What details?
CPU speed
Programming language used
Amount of memory
Compiler
Order of input
Size of input … sorta.




又堆、又栈、又树、又图，盐吃多了闲的？

> 实际上，是必须的。
>
> 计算机处理的问题的数量级不是100双鞋，几条信息，而是数十亿的用户数据，无数图片、聊天、网页、交易等等。
>
> 使用数据结构和算法，能让问题更简单，更高效，更优雅地得以解决。

## 评论区

<Utterances/>









