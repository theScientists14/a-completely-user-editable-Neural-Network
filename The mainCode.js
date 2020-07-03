var Neuron = {};

Neuron.prototype.create = function (id){

};

var layer = {};

var Network = {};

var Layers = [];

layer.prototype.create = function(size, id) {
	var newlayer = new layer();
	var Layer = [];
	layer.size = size;
	layer.id = id;

	for (i=1; i < size; i++) {
		var neuron;
		var Id = id+"."+i;
		neuron.create(Id);
		Layer.push(neuron);
	};
	newlayer.neurons = Layer;

	Layers.push(newlayer);
};



Network.prototype.create = function(layers) { // the layers input should look like this {"input": , "hidden": [], "output": }
	Network = layers;
};

Network.prototype.activate = function(inputValue) {
  for (i = 1; i < Network.input.layer.length; i++) {
    for (t = 1; i < inputValue.length) {
      Network.input.layer[i-1].value = inputValue[t];
    };
  };
};

Network.prototype.propagate = function(learningRate, answer) {

};
