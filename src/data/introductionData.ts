export const patterns = ['工厂模式', '单例模式', '装饰器模式', '策略模式', '组合模式'];
// 二维数组 pattern idx
export const scenes_name = [
    '热爱图形的小邱', '选班长问题',
    '更加丰富的图形世界', '四则运算',
    '邱老板的请求'
];

// 二维数组 pattern idx , scene idx
export const scenes_desc = [
    ['<span class="sceneTitle">场景1:</span><p>小邱是一个对图形世界非常好奇的小男孩。现在他希望你可以为他设计一个程序，根据他输入的图形名称自动为他生成相应的图形。小邱现在需要绘制正方形<span class="english">Square</span>，三角形<span class="english">Triangle</span>，和圆形<span class="english">Circle</span>，在这一场景中，你只需要定义和图形相应的类和方法。</p>' +
    '<p class="hint">Hint： 你的设计应符合工厂模式，根据面向对象的原则，你首先需要创建一个 <span class="english">Shape</span> 类为所有图形的接口</p>',
        '<span class="sceneTitle">场景2:</span><p>现在我们已经做完一些基础的准备工作了！现在请你创建一个工厂<span class="english">ShapeFactory</span>，其中的<span class="english">getShape</span>可以根据小邱传入的图形名称产生相应的图形吧！</p>',
        '<span class="sceneTitle">场景3:</span><p>恭喜你已经完成了创建工作，现在你可以来尝试一下利用我们的工厂为小邱生成图形啦，亦可赛艇 </p>'],

    ['<p><img src ="../../pic/danlipic1.jpg"  height="100px">' +
    '<img src ="../../pic/danlipic2.jpg" height="125px"></p>' +
    '<p><img src ="../../pic/danlipic3.jpg" height="125px"></p>'],

    ['<span class="sceneTitle">场景1:</span><p>小邱对你设计的图形工厂非常满意，但是随着小邱学习的深入对图形的功能扩展性的要求越来越高，你觉得是时候来换一种设计模式来满足他的需求，因此你来到这里学习装饰器模式。' +
    '小邱现在需要绘制正方形<span class="english">Square</span>，三角形<span class="english">Triangle</span>，和圆形<span class="english">Circle</span>，在这一场景中，你只需要定义和图形相应的类和方法。</p>' +
    '<p class="hint">Hint： 你的设计应符合装饰器模式，根据面向对象的原则，你首先需要创建一个 <span class="english">Shape</span> 类为所有图形的接口</p>',
        '<span class="sceneTitle">场景2:</span><p>经过了第一个场景，你已经可以绘制最简单的图形了，下一步我们就要给我们的图形加点“装饰”，我们建立<span class="english">ShapeDecorator</span> 类，它是我们图形的装饰器，也是一个抽象的装饰类，它在内部保存一个要被装饰的<span class="english"> Shape</span>对象,并定义 <span class="english">draw</span>方法</p>',
        '<span class="sceneTitle">场景3:</span><p>你已经定义好了一个装饰器类，然后这只是一个什么都做不了的抽象类，那么我们现在就要定义它的一个实现类，<span class="english">RedShapeDecorator</span> 它可以用<span class="english">setRed</span> 方法 为任意的一个图形涂上红色</p>'],

    ['<span class="sceneTitle">场景1:</span><p>小邱在终于开始学习解析几何了，但是他所遇到的第一个问题就是 每次遇到加减乘除这四个运算算法相似但是每次都要写一个分支判断非常麻烦，所以小邱又来拜托你能否让他用一行代码就搞得定</p>',
        '<span class="sceneTitle">场景2:</span><p>你需要一个上下文类<span class="english">Context</span>中的<span class="english">executeStrategy</span>>来负责执行相应的策略</p>'],

    ['<span class="sceneTitle">场景1:</span><p>热爱图形的小邱，通过学习了解析几何、计算机图形学之后终于靠父母的支持当上了某知名企业的老板，他现在希望有一个以树形结构管理企业要求可以查询和添加职员。' +
    '一个员工有姓名<span class="english">name</span>职位<span class="english">dept</span>和薪资<span class="english">salary</span>三个属性，请你设计并完成<span class="english">Employee</span>类</p>'],
];
