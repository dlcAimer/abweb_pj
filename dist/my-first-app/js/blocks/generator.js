goog.provide('Blockly.JavaScript.class');

goog.require('Blockly.JavaScript');

//////////////////////////////
//////////////////////////////
//          FACTORY         //
//////////////////////////////
//////////////////////////////
Blockly.JavaScript['factory_interface_1'] = function (block) {
    const text_name = "Shape";
    const statements_abstract = Blockly.JavaScript.statementToCode(block, 'ABSTRACT');
    const statements_impliment_1 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_1');
    const statements_impliment_2 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_2');
    const statements_impliment_3 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_3');
    let code = '';
    let codeList = '';
    code += 'interface ' + text_name + ' {\n\n' + indent(statements_abstract) + '}\n\n';
    codeList += code + '$';
    code += indent(statements_impliment_1) + indent(statements_impliment_2) + indent(statements_impliment_3);
    if (statements_impliment_1.length > 0) {
        codeList += statements_impliment_1 + '$';
    }
    if (statements_impliment_2.length > 0) {
        codeList += statements_impliment_2 + '$';
    }
    if (statements_impliment_3.length > 0) {
        codeList += statements_impliment_3 + '$';
    }
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['factory_interface_method'] = function (block) {
    // const colour_color = block.getFieldValue('COLOR');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public void draw(String color);\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['factory_class_1'] = function (block) {
    const text_name = block.getFieldValue('NAME');
    const statements_method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        code += 'class ' + text_name + ' implements Shape {\n\n' + indent(statements_method) + '}\n\n';
    } else {
        code += 'class ' + text_name + ' {\n\n' + indent(statements_method) + '}\n\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['factory_method_1'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        const class_name = block.parentBlock_.getFieldValue('NAME');
        code += 'public void draw(String input) {\n\nSystem.out.println(\"draw input ' + class_name + ' on the canvas\");\n\n}\n';
    } else {
        code += 'public void draw(String input) {\n\nSystem.out.println(\"draw input null on the canvas\");\n\n}\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['factory_class_2'] = function (block) {
    const statements_method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    const statements_EXTEND_1 = Blockly.JavaScript.statementToCode(block, 'EXTEND_1');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    let codeList = localStorage.getItem('code') === null ? '' : localStorage.getItem('code');
    code += 'class ShapeFactory {\n\n' + indent(statements_method) + '}\n\n';
    codeList += code + '$';
    let temp = '';
    temp += indent(statements_EXTEND_1);
    code += temp;
    codeList += 'public class Main {\n\n public static void main(String[] args){ \n\n' + temp + '}\n}\n';
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['factory_method_2'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public Shape get_shape(String shape_type) {\n\n' +
        'if(shape_type.equals(\"Circle\")){\n\nreturn new Circle();\n\n}\n' +
        'else if(shape_type.equals(\"Triangle\")){\n\nreturn new Triangle();\n\n}\n' +
        'else if(shape_type.equals(\"Square\")){\n\nreturn new Square();\n\n}\n' +
        'else{\n\nreturn null;\n\n}\n' +
        '\n\n}\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['factory_variable_3'] = function (block) {
    const statements_action = Blockly.JavaScript.statementToCode(block, 'ACTION');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        code += 'ShapeFactory shape_factory = new ShapeFactory();\n';
    } else {
        code += 'Object shape_factory = null;\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    code += indent(statements_action);
    return code;
};

Blockly.JavaScript['factory_variable_3_1'] = function (block) {
    const statements_action = Blockly.JavaScript.statementToCode(block, 'ACTION');
    let code = '';
    if (block.parentBlock_) {
        const shape_name = block.parentBlock_.getFieldValue('KIND');
        // TODO: Assemble JavaScript into code variable.
        code += 'Shape shape = shape_factory.get_shape(\"' + shape_name + '\");\n';
    } else {
        code += 'Shape shape = null';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    code += indent(statements_action);
    return code;
};

Blockly.JavaScript['factory_method_3'] = function (block) {
    const colour_color = block.getFieldValue('COLOR');
    if(block.parentBlock_.parentBlock_){
        localStorage.setItem('shape', block.parentBlock_.parentBlock_.getFieldValue('KIND'));
        localStorage.setItem('color', block.getFieldValue('COLOR'));
    }
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        code += 'shape.draw(\"' + colour_color + '\");\n';
    } else {
        code += 'draw(\"' + colour_color + '\");\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

//////////////////////////////
//////////////////////////////
//        DECORATOR         //
//////////////////////////////
//////////////////////////////
Blockly.JavaScript['decorator_interface_1'] = function (block) {
    const text_name = "Shape";
    const statements_abstract = Blockly.JavaScript.statementToCode(block, 'ABSTRACT');
    const statements_impliment_1 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_1');
    const statements_impliment_2 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_2');
    const statements_impliment_3 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_3');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    let codeList = '';
    code += 'interface ' + text_name + ' {\n\n' + indent(statements_abstract) + '}\n\n';
    codeList += code + '$';
    code += indent(statements_impliment_1) + indent(statements_impliment_2) + indent(statements_impliment_3);
    if (statements_impliment_1.length > 0) {
        codeList += statements_impliment_1 + '$';
    }
    if (statements_impliment_2.length > 0) {
        codeList += statements_impliment_2 + '$';
    }
    if (statements_impliment_3.length > 0) {
        codeList += statements_impliment_3 + '$';
    }
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['decorator_interface_method_1'] = function (block) {
    // const colour_color = block.getFieldValue('COLOR');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public void draw();\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['decorator_class_1'] = function (block) {
    const text_name = block.getFieldValue('NAME');
    const statements_method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    if(block.childBlocks_){
        localStorage.setItem('shape', text_name);
        localStorage.setItem('shape', 'red');
    }
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        code += 'class ' + text_name + ' implements Shape {\n\n' + indent(statements_method) + '}\n\n';
    } else {
        code += 'class ' + text_name + ' {\n\n' + indent(statements_method) + '}\n\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['decorator_method_1'] = function (block) {
    // TODO: Assemble JavaScript into code variable.

    let code = '';
    if (block.parentBlock_) {
        const class_name = block.parentBlock_.getFieldValue('NAME');
        code += 'public void draw() {\n\nSystem.out.println(\"draw ' + class_name + ' on the canvas\");\n\n}\n';
    } else {
        code += 'public void draw() {\n\nSystem.out.println(\"draw null on the canvas\");\n\n}\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['decorator_class_2'] = function (block) {
    const statements_method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    let codeList = localStorage.getItem("code") === null ? '' : localStorage.getItem("code");
    code += 'abstract class ShapeDecorator {\n\n ' +
        'private Object decorated_shape;\n' +
        'public ShapeDecorator(Object shapeObject){\n\n this.decorated_shape = shapeObject; \n\n}\n'
        + indent(statements_method) + '}\n\n';
    codeList += code + '$';
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['decorator_class_method_2'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public abstract void draw();\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['decorator_class_3'] = function (block) {
    const statements_method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    const statements_method_2 = Blockly.JavaScript.statementToCode(block, 'METHOD_2');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    let codeList = localStorage.getItem("code") === null ? '' : localStorage.getItem("code");
    if (block.parentBlock_) {
        code += 'class RedShapeDecorator extends ShapeDecorator {\n\n ' +
            'private Object decorated_shape;\n' +
            'public RedShapeDecorator(Object shapeObject){\n\n super(shapeObject); \n\n}\n'
            + indent(statements_method) + '' + indent(statements_method_2) + '}\n\n';
    } else {
        code += 'class RedShapeDecorator {\n\n ' +
            'private Object decorated_shape;\n' +
            'public RedShapeDecorator(Object shapeObject){\n\n \n\n}\n'
            + indent(statements_method) + '' + indent(statements_method_2) + '}\n\n';
    }
    codeList += code;
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['decorator_class_method_3'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public void draw(){\n\n ((Shape)this.decorated_shape).draw();\n setRed(); \n\n}\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['decorator_class_method_3_1'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public void setRed(){\n\n System.out.println(\"color：red\"); \n\n}\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['decorator_instance_4'] = function (block) {
    const text_name = block.getFieldValue('NAME');
    const dropdown_kind = block.getFieldValue('KIND');
    const statements_name = Blockly.JavaScript.statementToCode(block, 'DO');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    let codeList = localStorage.getItem("code") === null ? '' : localStorage.getItem("code");
    code += 'public class Main {\n' +
        '    public static void main(String[] args) {\n';
    if (block.parentBlock_) {
        code += 'RedShapeDecorator ' + text_name + ' = new RedShapeDecorator(new ' + dropdown_kind + '());\n';
    } else {
        code += 'RedShapeDecorator ' + text_name + ' = null;\n';
    }
    if (statements_name) {
        let str = indent(statements_name);
        str = str.replace(/^\s*/, "");
        code += text_name + '.' + str;
    }
    code += '}\n\n}';
    codeList += code;
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['decorator_class_method_4'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'draw();\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

//////////////////////////////
//////////////////////////////
//        SINGLETON         //
//////////////////////////////
//////////////////////////////

Blockly.JavaScript['singleton_class_1'] = function (block) {
    const dropdown_kind = block.getFieldValue('KIND');
    const statements_method_1 = Blockly.JavaScript.statementToCode(block, 'METHOD_1');
    const statements_method_2 = Blockly.JavaScript.statementToCode(block, 'METHOD_2');
    const statements_method_3 = Blockly.JavaScript.statementToCode(block, 'METHOD_3');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    let codeList = '';
    code += 'public class Classroom {\n\n' +
        '\t' + dropdown_kind + ' Classroom(){}\n' +
        indent(statements_method_1) + indent(statements_method_2) + indent(statements_method_3) + '}';
    codeList += code;
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['singleton_class_method_1_1'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'private static Classroom instance = new Classroom();\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['singleton_class_method_1_2'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public static Classroom getInstance(){\n' +
        '      return instance;\n' +
        '   }\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['singleton_class_method_1_3'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public void showMessage(){\n' +
        '      System.out.println("I am the monitor.!");\n' +
        '   }\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

//////////////////////////////
//////////////////////////////
//        STRATEGY          //
//////////////////////////////
//////////////////////////////
Blockly.JavaScript['strategy_interface_1'] = function (block) {
    const statements_abstract = Blockly.JavaScript.statementToCode(block, 'ABSTRACT');
    const statements_impliment_1 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_1');
    const statements_impliment_2 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_2');
    const statements_impliment_3 = Blockly.JavaScript.statementToCode(block, 'IMPLIMENT_3');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    let codeList = '';
    code += 'public interface Strategy {\n\n' + indent(statements_abstract) + '}\n\n';
    codeList += code + '$';
    code += indent(statements_impliment_1) + indent(statements_impliment_2) + indent(statements_impliment_3);
    if (statements_impliment_1.length > 0) {
        codeList += statements_impliment_1 + '$';
    }
    if (statements_impliment_2.length > 0) {
        codeList += statements_impliment_2 + '$';
    }
    if (statements_impliment_3.length > 0) {
        codeList += statements_impliment_3 + '$';
    }
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['strategy_interface_method_1'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public int doOperation(int num1, int num2);\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['strategy_class_1'] = function (block) {
    const dropdown_class = block.getFieldValue('CLASS');
    const statements_method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        code += 'public class ' + dropdown_class + ' implements Strategy{\n\n';
        code += indent(statements_method) + '\n\n}';
    } else {
        code += 'public class ' + dropdown_class + ' {\n\n';
        code += indent(statements_method) + '\n\n}';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['strategy_class_method_1'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        const kind = block.parentBlock_.getFieldValue('CLASS');
        if (kind === "OperationAdd") {
            code += 'public int doOperation(int num1, int num2) {\n' +
                '        return num1 + num2;\n' +
                '    }\n';
        } else if (kind === "OperationSubstract") {
            code += 'public int doOperation(int num1, int num2) {\n' +
                '    return num1 - num2;\n' +
                '}\n';
        } else {
            code += 'public int doOperation(int num1, int num2) {\n' +
                '    return num1 * num2;\n' +
                '}\n';
        }
    } else {
        code += 'public int doOperation(int num1, int num2) {}\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['strategy_class_2'] = function (block) {
    const statements_method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    let codeList = localStorage.getItem('code') === null ? '' : localStorage.getItem('code');;
    code += 'public class Context {\n' +
        '   private Strategy strategy;\n' +
        ' \n' +
        '   public Context(Strategy strategy){\n' +
        '      this.strategy = strategy;\n' +
        '   }\n' + indent(statements_method) + '}\n';
    codeList += code;
    localStorage.setItem("code", codeList);
    return code;
};

Blockly.JavaScript['strategy_function_2'] = function (block) {
    const statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public int executeStrategy(int num1, int num2){\n\n' + indent(statements_do) + '\n}\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['strategy_class_method_2'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'return strategy.doOperation(num1, num2);\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

//////////////////////////////
//////////////////////////////
//        COMPOSITE         //
//////////////////////////////
//////////////////////////////
Blockly.JavaScript['composite_class_1'] = function (block) {
    const dropdown_kind = block.getFieldValue('KIND').split("[")[0];
    const statements_method_1 = Blockly.JavaScript.statementToCode(block, 'METHOD_1');
    const statements_method_2 = Blockly.JavaScript.statementToCode(block, 'METHOD_2');
    const statements_method_3 = Blockly.JavaScript.statementToCode(block, 'METHOD_3');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public class Employee {\n\n private String name;\n' +
        '    private String dept;\n' +
        '    private int salary;\n' +
        '    private ' + dropdown_kind + '[] subordinates;\n' +
        '    private int current_num = 0;\n' +
        '    public Employee(String name,String dept, int salary) {\n\n' +
        '        this.name = name;\n' +
        '        this.dept = dept;\n' +
        '        this.salary = salary;\n' +
        '        subordinates = new ' + dropdown_kind + '[100];\n\n' +
        '    }\n' + indent(statements_method_1) + indent(statements_method_2) + indent(statements_method_3) + '}';
    localStorage.setItem("code", code);
    return code;
};

Blockly.JavaScript['composite_class_method_1_1'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        const dropdown_kind = block.parentBlock_.getFieldValue('KIND').split("[")[0];
        code += 'public void add(' + dropdown_kind + ' e) {\n' +
            '        subordinates[current_num] = e;\n' +
            '        current_num+=1;\n' +
            '    }\n';
    } else {
        code += 'public void add(null e) {\n' +
            '        subordinates[current_num] = e;\n' +
            '        current_num+=1;\n' +
            '    }\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['composite_class_method_1_2'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    if (block.parentBlock_) {
        const dropdown_kind = block.parentBlock_.getFieldValue('KIND').split("[")[0];
        code += 'public ' + dropdown_kind + '[] getSubordinates(){\n' +
            '        return subordinates;\n' +
            '    }\n';
    } else {
        code += 'public null getSubordinates(){\n' +
            '        return subordinates;\n' +
            '    }\n';
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['composite_class_method_1_3'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    code += 'public String toString(){\n' +
        '        return ("Employee :[ Name : "+ name\n' +
        '                +", dept : "+ dept + ", salary :"\n' +
        '                + salary+" ]");\n' +
        '    }\n';
    if (!block.parentBlock_) {
        localStorage.setItem("code", localStorage.getItem("code") + code + '$');
    }
    return code;
};

Blockly.JavaScript['composite_class_2'] = function (block) {
    const text_ceo_name = block.getFieldValue('CEO_NAME');
    const text_ceo_position = block.getFieldValue('CEO_POSITION');
    const text_ceo_salary = block.getFieldValue('CEO_SALARY');
    const text_headsales_name = block.getFieldValue('headSales_NAME');
    const text_headsales_position = block.getFieldValue('headSales_POSITION');
    const text_headsales_salary = block.getFieldValue('headSales_SALARY');
    const text_sales_name = block.getFieldValue('Sales_NAME');
    const text_sales_position = block.getFieldValue('Sales_POSITION');
    const text_sales_salary = block.getFieldValue('Sales_SALARY');
    const statements_add_1 = Blockly.JavaScript.statementToCode(block, 'ADD_1');
    const statements_add_2 = Blockly.JavaScript.statementToCode(block, 'ADD_2');
    const statements_print = Blockly.JavaScript.statementToCode(block, 'PRINT');
    // TODO: Assemble JavaScript into code variable.
    let code = '';
    return code;
};

/*      工具方法    */
function indent(lines) {
    let lineArr = lines.split('\n');
    let res = '';
    for (let i = 0; i < lineArr.length; i++) {
        res += '\t' + lineArr[i] + '\n';
    }
    return res;
}
