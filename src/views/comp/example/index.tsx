import React, {
  Dispatch,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from "react";

// (1).声明状态类型
interface State {
  count: number;
}

// (2).声明Reducer action类型,可以将类型更加细化,例如{type:"add";payload?: Partial<State>;}
type ActionType = {
  type: string;
  payload?: Partial<State>;
};

// (3).声明React Context类型
interface Context {
  // 状态
  state: State;
  // reducer返回的调度函数
  dispatch: Dispatch<ActionType>;
}

// (4).创建React Context,指定Context泛型类型并设置Context默认值
const Context = React.createContext<Context>({
  state: { count: 1 },
  dispatch: () => {},
});

// (3).声明Context提供者
const ContextProvider: React.FC<PropsWithChildren> = (props) => {
  // 声明reducer函数
  function reducer(state: State, action: ActionType) {
    const type = action.type;
    switch (type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer<Reducer<State, ActionType>>(reducer, {
    count: 1,
  });
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

// 消费者组件
function Consumer() {
  const { state, dispatch } = useContext<Context>(Context);
  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>count:{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <div>Example</div>
    </div>
  );
}

function Example() {
  return (
    <ContextProvider>
      <Consumer />
    </ContextProvider>
  );
}

export default Example;
