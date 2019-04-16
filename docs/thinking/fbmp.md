
https://stackoverflow.com/questions/405627/flow-based-programming/2735832

FSM（有限状态自动机）是实现流编程的方式之一。


[Jsoup代码解读之四-parser(上)](https://github.com/code4craft/jsoup-learning/blob/master/blogs/jsoup4.md) 提到状态机的相关概念

Jsoup的词法分析和语法分析都用到了状态机。状态机可以理解为一个特殊的程序模型，例如经常跟我们打交道的正则表达式就是用状态机实现的。

它由状态(state)和转移(transition)两部分构成。根据状态转移的可能性，状态机又分为DFA(确定有限状态机)和NFA(非确定有限状态自动机)。这里拿一个最简单的正则表达式"a[b]*"作为例子，我们先把它映射到一个状态机DFA，大概是这样子：

基于 Jsoup 的方式：

```
public class StateModelABStateMachine implements ABStateMachine {

    State state;

    StringBuilder accum;

    enum State {
        Init {
            @Override
            public void process(StateModelABStateMachine stateModelABStateMachine, StringReader reader) throws StringReader.EOFException {
                char ch = reader.read();
                if (ch == 'a') {
                    stateModelABStateMachine.state = AfterA;
                    stateModelABStateMachine.accum.append(ch);
                }
            }
        },
        Accept {
            ...
        },
        AfterA {
            ...
        },
        AfterB {
            ...
        };

        public void process(StateModelABStateMachine stateModelABStateMachine, StringReader reader) throws StringReader.EOFException {
        }
    }

    public void process(StringReader reader) throws StringReader.EOFException {
        state.process(this, reader);
    }
}
```


| 类型 | 链接  | 说明 |
|-----|-------|------|
| 文章 | [有限状态机在 JavaScript 中的简单应用](https://ielgnaw.com/article/simple-fsm-in-js) | 简单地介绍了状态的 JavaScript 实现 |
| JavaScript 库 | [StateMachine: Javascript 有限状态机](https://github.com/ccqgithub/StateMachine) | 引入  JavaScript 库 | 
