class ProxyFactory {
    static create(objeto , props, armadilha) {
        return new Proxy(objeto , {
            get(target , prop  , receiver) {
                if(typeof(target[prop]) == typeof(Function) && props.includes(prop)) {
                    return function() {
                        target[prop].apply(target , arguments);
                        armadilha(target);
                    }
                } else {
                    return target[prop];
                }
            },
            set(target , prop , value , receiver) {
                const update = Reflect.set(target , prop, value);
                if(props.includes(prop))
                    armadilha(target);
                return update;
            }
        });
    }
}