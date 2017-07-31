import flask

def main():
    app = flask.Flask(
        __name__,
        template_folder = 'PROJECT/dist',
        static_folder = 'PROJECT/dist'
    )
    @app.route('/')
    def index():
        return flask.send_file('PROJECT/dist/index.html')

    @app.route('/<path:a>')
    def any_index(a):
        return flask.redirect('/')

    app.run(host='0.0.0.0',port=8888, debug=True)

if __name__ == '__main__':
    main()
