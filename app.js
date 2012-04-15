Ext.Loader.setConfig({enabled: true});

Ext.require([
	'Ux.CpfField',
	'Ux.CnpjField'
]);

Ext.onReady(function() {
	
	Ext.create('Ext.form.Panel', {
		renderTo: Ext.getBody(),
		title: 'Exemplo Campos CPF e CNPJ',
		width: 250,
		bodyPadding: 5,
		fieldDefaults: {
			labelAlign: 'left',
			labelWidth: 50,
			anchor: '100%',
			msgTarget: 'under'
		},
		defaultType: 'textfield',
		items: [
		{
            xtype      : 'radiogroup',
            fieldLabel : 'Tipo de Pessoa',
            columns: 2,
            items: [
                {
                    boxLabel  : 'Física',
                    name      : 'tipoPessoa',
                    inputValue: 'cpf',
                    checked   : true
                }, {
                    boxLabel  : 'Jurídica',
                    name      : 'tipoPessoa',
                    inputValue: 'cnpj'
                }
            ],
            onChange: function(field){
            	var novoValor = field.tipoPessoa;
            	if (!Ext.isArray(novoValor)) {
            		if (novoValor == 'cpf') {
            		var cpf = Ext.ComponentQuery.query('cpffield')[0];
            		var cnpj = Ext.ComponentQuery.query('cnpjfield')[0];
            		cpf.setVisible(true);
            		cnpj.setVisible(false);
            	} else {
            		var cpf = Ext.ComponentQuery.query('cpffield')[0];
            		var cnpj = Ext.ComponentQuery.query('cnpjfield')[0];
            		cpf.setVisible(false);
            		cnpj.setVisible(true);
            	}
            	}
            }
        },
		{
			fieldLabel: 'CPF', 
			name: 'cpf', 
			xtype: 'cpffield',
			hidden: false
		},{
			fieldLabel: 'CNPJ', 
			name: 'cpnj', 
			xtype: 'cnpjfield',
			hidden: true
		}]	
	});
	
});