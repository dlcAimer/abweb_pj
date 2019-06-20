goog.provide('Blockly.Blocks.class');

goog.require('Blockly.Blocks');

//////////////////////////////
//////////////////////////////
//          FACTORY         //
//////////////////////////////
//////////////////////////////
Blockly.Blocks['factory_interface_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("interface Shape");
        this.appendStatementInput("ABSTRACT")
            .setCheck('factory_interface_method')
            .appendField("method");
        this.appendStatementInput("IMPLIMENT_1")
            .setCheck('factory_class_1')
            .appendField("impliments");
        this.appendStatementInput("IMPLIMENT_2")
            .setCheck('factory_class_1');
        this.appendStatementInput("IMPLIMENT_3")
            .setCheck('factory_class_1');
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['factory_interface_method'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("unrealized draw");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['factory_class_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class")
            .appendField(new Blockly.FieldTextInput("name"), "NAME");
        this.appendStatementInput("METHOD")
            .setCheck(null)
            .appendField("method");
        this.setPreviousStatement(true, null);
        this.setNextStatement(false, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['factory_method_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("draw");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['factory_class_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class ShapeFactory");
        this.appendStatementInput("METHOD")
            .setCheck(null)
            .appendField("method");
        this.appendStatementInput("EXTEND_1")
            .setCheck('factory_variable_3')
            .appendField("create");
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['factory_method_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get_Shape");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['factory_variable_3'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("shape_factory");
        this.appendStatementInput("ACTION")
            .setCheck(null)
            .appendField("produce")
            .appendField(new Blockly.FieldDropdown([["Circle","Circle"], ["Triangle","Triangle"], ["Square","Square"]]), "KIND");
        this.setPreviousStatement(true, null);
        this.setColour(100);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['factory_variable_3_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("shape");
        this.appendStatementInput("ACTION")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setColour(100);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['factory_method_3'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("draw")
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//////////////////////////////
//////////////////////////////
//        DECORATOR         //
//////////////////////////////
//////////////////////////////
Blockly.Blocks['decorator_interface_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("interface Shape");
        this.appendStatementInput("ABSTRACT")
            .setCheck(null)
            .appendField("method");
        this.appendStatementInput("IMPLIMENT_1")
            .setCheck(null)
            .appendField("impliments");
        this.appendStatementInput("IMPLIMENT_2")
            .setCheck(null);
        this.appendStatementInput("IMPLIMENT_3")
            .setCheck(null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_interface_method_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("unrealized draw");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_class_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class")
            .appendField(new Blockly.FieldTextInput("name"), "NAME");
        this.appendStatementInput("METHOD")
            .setCheck(null)
            .appendField("method");
        this.setPreviousStatement(true, null);
        this.setNextStatement(false, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_method_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("draw");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_class_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("ShapeDecorator");
        this.appendDummyInput()
            .appendField("target shape")
            .appendField("shapeObject");
        this.appendStatementInput("METHOD")
            .setCheck(null)
            .appendField("method");
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_class_method_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("unrealized draw");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_class_3'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("RedShapeDecorator");
        this.appendDummyInput()
            .appendField("target shape")
            .appendField("shapeObject");
        this.appendStatementInput("METHOD")
            .setCheck(null)
            .appendField("method");
        this.appendStatementInput("METHOD_2")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_class_method_3'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("draw");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_class_method_3_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("setRed");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_instance_4'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("instance")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendDummyInput()
            .appendField("kind of target shape")
            .appendField(new Blockly.FieldDropdown([["Circle","Circle"], ["Triangle","Triangle"], ["Square","Square"]]), "KIND");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decorator_class_method_4'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("draw");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//////////////////////////////
//////////////////////////////
//        SINGLETON         //
//////////////////////////////
//////////////////////////////

Blockly.Blocks['singleton_class_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class Classroom");
        this.appendDummyInput()
            .appendField("contain")
            .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"]]), "KIND")
            .appendField("Constructor");
        this.appendStatementInput("METHOD_1")
            .setCheck(null)
            .appendField("method");
        this.appendStatementInput("METHOD_2")
            .setCheck(null);
        this.appendStatementInput("METHOD_3")
            .setCheck(null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['singleton_class_method_1_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Create an object of Classroom");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['singleton_class_method_1_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get the only available object");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['singleton_class_method_1_3'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get the monitor");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//////////////////////////////
//////////////////////////////
//        STRATEGY          //
//////////////////////////////
//////////////////////////////
Blockly.Blocks['strategy_interface_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("interface Strategy");
        this.appendStatementInput("ABSTRACT")
            .setCheck(null)
            .appendField("method");
        this.appendStatementInput("IMPLIMENT_1")
            .setCheck(null)
            .appendField("impliments");
        this.appendStatementInput("IMPLIMENT_2")
            .setCheck(null);
        this.appendStatementInput("IMPLIMENT_3")
            .setCheck(null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['strategy_interface_method_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("unrealized doOperation");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['strategy_class_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class")
            .appendField(new Blockly.FieldDropdown([["OperationAdd","OperationAdd"], ["OperationSubstract","OperationSubstract"], ["OperationMultiply","OperationMultiply"]]), "CLASS");
        this.appendStatementInput("METHOD")
            .setCheck(null)
            .appendField("method");
        this.setPreviousStatement(true, null);
        this.setNextStatement(false, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['strategy_class_method_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("doOperation");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['strategy_class_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class Context");
        this.appendDummyInput()
            .appendField("with attribute strategy");
        this.appendStatementInput("METHOD")
            .setCheck(null)
            .appendField("method");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['strategy_function_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("function executeStrategy");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['strategy_class_method_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("doOperation");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//////////////////////////////
//////////////////////////////
//        COMPOSITE         //
//////////////////////////////
//////////////////////////////
Blockly.Blocks['composite_class_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class Employee");
        this.appendDummyInput()
            .appendField("own the attribute")
            .appendField(new Blockly.FieldDropdown([["String[]","String[]"], ["int[]","int[]"], ["Employee[]","Employee[]"]]), "KIND")
            .appendField("subordinates");
        this.appendStatementInput("METHOD_1")
            .setCheck(null)
            .appendField("method");
        this.appendStatementInput("METHOD_2")
            .setCheck(null);
        this.appendStatementInput("METHOD_3")
            .setCheck(null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['composite_class_method_1_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("add");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['composite_class_method_1_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("getSubordinates");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['composite_class_method_1_3'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("toString");
        this.setPreviousStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['composite_class_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class Main");
        this.appendDummyInput()
            .appendField("set CEO's infomation")
            .appendField(new Blockly.FieldTextInput("name"), "CEO_NAME")
            .appendField(new Blockly.FieldTextInput("position"), "CEO_POSITION")
            .appendField(new Blockly.FieldTextInput("salary"), "CEO_SALARY");
        this.appendDummyInput()
            .appendField("set Head Sales's infomation")
            .appendField(new Blockly.FieldTextInput("name"), "headSales_NAME")
            .appendField(new Blockly.FieldTextInput("position"), "headSales_POSITION")
            .appendField(new Blockly.FieldTextInput("salary"), "headSales_SALARY");
        this.appendDummyInput()
            .appendField("set Sales's infomation")
            .appendField(new Blockly.FieldTextInput("name"), "Sales_NAME")
            .appendField(new Blockly.FieldTextInput("position"), "Sales_POSITION")
            .appendField(new Blockly.FieldTextInput("salary"), "Sales_SALARY");
        this.appendStatementInput("ADD_1")
            .setCheck(null)
            .appendField("Constitute a company relationship");
        this.appendStatementInput("ADD_2")
            .setCheck(null);
        this.appendStatementInput("PRINT")
            .setCheck(null)
            .appendField("print the company");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
