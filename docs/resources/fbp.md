# 流编程

## 相关讨论

[https://stackoverflow.com/questions/405627/flow-based-programming](https://stackoverflow.com/questions/405627/flow-based-programming)

相关观点：

 - 1. Have you used FBP for a real project?
 - 2. What is your opinion of FBP?
 - 3. Does FBP have a future?
 
[Quora](https://www.quora.com/What-exactly-is-flow-based-programming)

> 一个正式的定义可能是基于流程的编程是一种编程范例，其中应用程序被视为交换信息包的黑盒进程网络。

> 流程之间的连接是在外部定义的，可以重新配置以形成不同的应用程序，而无需更改单个流程。 这使基于流程的编程基于组件（参见下图），并导致高可重用性。
   
[Hacker Nes](https://news.ycombinator.com/item?id=8867584)



[Google Group](https://groups.google.com/forum/#!topic/flow-based-programming/L_E7dEU6sN8)
   
## 类似于流的项目

[http://www.jpaulmorrison.com/cgi-bin/wiki.pl?FlowLikeProjects](http://www.jpaulmorrison.com/cgi-bin/wiki.pl?FlowLikeProjects)

有趣的几个概念：

**BusinessProcessExecutionLanguage (BPEL)**

> 业务过程执行语言，这是一种基于XML的，用来描写业务过程的编程语言，被描写的业务过程的每个单一步骤则由Web服务来实现。

通过 BPEL 可以描写一个参加一个Web服务过程的Web服务的接口，比如信息需要按照怎样的顺序被输入，但是BPEL无法用来描写一个业务过程的调谐。

 - Wiki: https://en.wikipedia.org/wiki/Business_Process_Execution_Language 

## 数据流架构

> 数据流架构是一种计算机架构，与传统的冯·诺依曼架构或控制流架构形成鲜明对比。 数据流体系结构没有程序计数器（概念上）：指令的可执行性和执行仅根据指令的输入参数的可用性来确定，因此指令执行的顺序是不可预测的，即行为是不确定的。

Wiki: [https://en.wikipedia.org/wiki/Dataflow_architecture](https://en.wikipedia.org/wiki/Dataflow_architecture)

## 相关文章

[Thinking about the flow-based programming user interface](https://bergie.iki.fi/blog/inspiration-for-fbp-ui/)

(en) [如何开始无代码编程](https://colab.coop/blog/how-to-start-flowing-with-flow-based-programming/)

DSL [The Warewolf domain specific language: simple but powerful](https://warewolf.io/blog/warewolf-domain-specific-language/)

## 相关书籍

Matt Carkci: Dataflow and Reactive Programming Systems: A Practical Guide to Developing Dataflow and Reactive Programming Systems

## 相关项目

### 组件集

https://github.com/rdkmaster/jigsaw

### Flapjax

[Flapjax](https://www.flapjax-lang.org/)  是一种新的编程语言，围绕现代基于客户端的 We b应用程序的需求而设计。 其主要特点包括：
                                          
 - 事件驱动，响应性评估
 - 用于与 Web 服务通信的事件流抽象
 - 与外部 Web 服务的接口

Paper：[Flapjax: A Programming Language for Ajax Applications](http://cs.brown.edu/~sk/Publications/Papers/Published/mgbcgbk-flapjax/paper.pdf)

GitHub: [https://github.com/brownplt/flapjax](https://github.com/brownplt/flapjax)

### TaskFlow

[https://github.com/openstack/taskflow](https://github.com/openstack/taskflow) 是一个python库，用来简化任务的执行管理，同时，实现任务的一致性、可扩展和可靠性。

### PaPy

[PaPy](https://github.com/mcieslik-mctp/papy)


 
