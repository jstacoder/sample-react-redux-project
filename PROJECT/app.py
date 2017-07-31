import flask




def main():
    app = flask.Flask(__name__, static_folder='dist', template_folder='dist')
    
    @app.route('/')
    @app.route('/<path:p>')    
    def index(p=None):
        try:
            return flask.send_file(p)
        except:
            return flask.send_file('dist/index.html')
    app.run(debug=True, host='0.0.0.0', port=8888)



if __name__ == "__main__":
    main()