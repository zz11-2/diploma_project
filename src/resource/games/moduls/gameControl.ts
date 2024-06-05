//引入其他的类
import Snake from "./snake";
import Food from "./food";
import ScorePanel from "./scorePanel";

//游戏控制器,控制其他的所有类
class GaemControl{
    //定义三个属性
    //蛇
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    //创建一个属性来存储蛇的移动方向(也就是按键的方向)
    direction:string='Right';
    //创建一个属性来记录游戏是否结束
    isLive=true;
    constructor(){
        this.snake=new Snake()
        this.food=new Food()
        this.scorePanel=new ScorePanel()
        this.init()
    }
    //游戏的初始化方法,调用后游戏即开始
    init(){
        //绑定键盘按下的事件
        document.addEventListener("keydown",this.keydowmHandler.bind(this))
       //调用run方法,使蛇移动
        this.run()
    }
    //创建一个键盘按下的响应函数
    keydowmHandler(event:KeyboardEvent){
        //需要检查event.key的值是否合法(用户是否按了正确案件)
        //修改direction属性
    this.direction=event.key
  
        
    }
    run(){
        // 根据方向(this.direction)来使蛇的位置改变  向上 top 减少 向下top增加 向左left减少 向右 left增加
        //获取蛇现在的坐标
        let X=this.snake.X
        let Y=this.snake.Y
        //根据按键方向来修改X值和Y值
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                //向上移动top减少
            Y-=10;
            break;
            case "ArrowDown":
            case "Down":
                //向下移动top增加
                Y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                //向左移动left减少
                X-=10;
                break;
            case "ArrowRight":
            case "Right":
                //向右移动left增加
                X+=10;
                break;
        }
       this.checkEat(X,Y)
        //修改蛇的X和Y值
       try{
        this.snake.X=X
        this.snake.Y=Y
       }catch(e:any){
        //进入到catch 说明出现了异常 游戏结束 弹出一个提示信息
        alert(e.message + 'GAME OVER');
        this.isLive=false
       }

        //开启一个定时调用
      this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }
    //定义一个方法,用来检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if (X===this.food.X && Y===this.food.Y){
             //检查蛇是否吃到食物
       
            //食物的位置要进行重置
            this.food.change()
            //分数增加
            this.scorePanel.addScore()
            //蛇要增加一节
            this.snake.addBody()

        
        }
    }
}
export default GaemControl