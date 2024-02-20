import {Component, Property} from '@wonderlandengine/api';

/**
 * changecolour
 */
export class Changecolour extends Component {
    static TypeName = 'changecolour';
    /* Properties that are configurable in the editor */
    static Properties = {
        param: Property.float(1.0),
        MeshObject: Property.object()
    };

    static onRegister(engine) {
        /* Triggered when this component class is registered.
         * You can for instance register extra component types here
         * that your component may create. */
    }

    init() {
        this.mesh = this.MeshObject.getComponent('mesh');
        this.defaultMaterial = this.mesh.material;
        const target = this.object.getComponent('cursor-target');
        target.addClickFunction(this.onClick.bind(this));
        this.delta = 0.0;
    }

    onClick() {
        this.delta += 0.01;
        /* R, G, B, A */
        //this.defaultMaterial.diffuseColor = [155+this.delta, 89+this.delta, 133+this.delta, 1];
        this.defaultMaterial.diffuseColor = [155*this.delta, 89*this.delta, 133*this.delta, 1];
    }
}
